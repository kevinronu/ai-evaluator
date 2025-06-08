// @ts-check
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      OPEN_AI_APIK_KEY: envField.string({
        context: "server",
        access: "secret",
      }),
    },
  },
});
