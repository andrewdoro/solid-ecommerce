import solid from "solid-start/vite";
import UnoCSS from "unocss/vite";
import { defineConfig } from "vite";
// @ts-expect-error no typing
import vercel from "solid-start-vercel";

export default defineConfig(() => {
  return {
    plugins: [solid({ ssr: false, adapter: vercel({ edge: false }) }), UnoCSS()],
    ssr: {
      noExternal: ["@kobalte/core"],
    },
  };
});