import { supabase } from "./supabase";

export const getSetting = async function () {
  try {
    const { data, error } = await supabase.from("settings").select().single();

    if (error) throw new Error("Setting could not be load");

    return data;
  } catch (err) {
    throw err.message;
  }
};

export const updateSetting = async function (settingObj) {
  try {
    const { data, error } = await supabase
      .from("settings")
      .update(settingObj)
      .eq("id", 1);

    if (error) throw new Error("Settings could not be updated");

    return data;
  } catch (err) {
    throw err.message;
  }
};
