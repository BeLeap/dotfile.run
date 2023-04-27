import { load } from "https://deno.land/std/dotenv/mod.ts";

const dotenv = await load();

export const getEnv = (key: string) => {
  const env = Deno.env.get(key);
  return env === undefined ? dotenv[key] : dotenv;
};
