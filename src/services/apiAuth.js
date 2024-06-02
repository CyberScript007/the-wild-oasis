import { supabase, supabaseUrl } from "../services/supabase";

export const getSignUp = async function ({ email, password, fullname }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullname,
        avatar: "",
      },
    },
  });

  if (error) throw new Error("User cannot be created successfully");

  return data;
};

export const getUpdateUser = async function ({ password, fullname, avatar }) {
  let updateUser;

  if (fullname)
    updateUser = {
      data: { fullname },
    };

  if (password)
    updateUser = {
      password,
    };

  const { data, error } = await supabase.auth.updateUser(updateUser);

  if (error) throw new Error("This user cannot be updated");
  console.log(data);

  if (!avatar) return data;

  const image = `avatar-${Math.random()}-${data.user.id}`;

  const { error: storageError } = await supabase.storage
    .from("avatars")
    .upload(image, avatar);

  if (storageError)
    throw new Error("There was an error when upload an avatar image");

  const { data: uploadUser } = await supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${image}`,
    },
  });

  if (avatar) return uploadUser;
};

export const getLogIn = async function ({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error("Provided email or password is incorrect");
  console.log(error);
  return data;
};

export const signOut = async function () {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error("User cannot be logged out");
};

export const getCurrentUser = async function () {
  const { data: session } = await supabase.auth.getSession();

  if (!session.session) return null;

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) throw new Error("Invalid username or password");

  return user;
};
