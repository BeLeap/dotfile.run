import { load } from "https://deno.land/std@0.184.0/dotenv/mod.ts";

const dotenv = await load();

export const getEnv = (key: string) => {
  const env = Deno.env.get(key);
  return env === undefined ? dotenv[key] : dotenv;
};
