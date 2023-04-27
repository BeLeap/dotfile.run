import { load } from "dotenv";

const dotenv = await load();

export const getEnv = (key: string) => {
  const env = Deno.env.get(key);
  return env === undefined ? dotenv[key] : dotenv;
};
