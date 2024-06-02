"use strict";
import { supabaseUrl, supabase } from "./supabase";

export const getCabins = async function () {
  try {
    const { data, error } = await supabase.from("cabins").select();

    console.log(error, data);

    if (error) throw new Error("💥💥💥 Cabin could not be loaded");

    return data;
  } catch (err) {
    throw err.message;
  }
};

export const DeleteCabin = async function (id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) throw new Error("💥💥💥 Cabin could not be deleted");

  return data;
};

export const createCabinUpdate = async function (obj, id) {
  const randomNumber = Math.random();

  const hasImagePath = obj.image?.startsWith?.(supabaseUrl);

  const image = `${randomNumber}-${obj.image?.name}`.replaceAll("/", "");

  const imagePath = hasImagePath
    ? obj.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${image}`;

  // create a query for both creating and updating cabin
  let query = supabase.from("cabins");

  // create a new cabin
  if (!id) query = query.insert({ ...obj, image: imagePath });

  // updata a cabin
  if (id) query = query.update({ ...obj, image: imagePath }).eq("id", id);

  const { data, error } = await query.select().single();

  if (error) throw new Error("💥💥💥 Cabin could not be created");

  // return the cabins if the hasImagePath is true
  if (hasImagePath) return data;

  // upload an image to the cabin
  const { uploadError } = await supabase.storage
    .from("cabin-images")
    .upload(image, obj.image, {
      upsert: false,
      cacheControl: "3600",
    });

  if (uploadError) {
    await supabase.from("cabins").delete().eq("id", data.id);

    throw new Error("Image could not be uploaded");
  }

  return data;
};
