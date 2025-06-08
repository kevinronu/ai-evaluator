import OpenAI from "openai";

import { OPEN_AI_API_KEY } from "astro:env/server";

export const openai = new OpenAI({
  apiKey: OPEN_AI_API_KEY!,
});
