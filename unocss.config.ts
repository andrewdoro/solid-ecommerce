import {
  defineConfig,
  presetUno,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss";
import { presetKobalte } from "./src/utils/kobaltePreset";

export default defineConfig({
  presets: [
    presetUno({ dark: { dark: `[data-kb-theme="dark"]`, light: `[data-kb-theme="light"]` } }),
    presetKobalte(),
    presetWebFonts({
      provider: "fontshare",
      fonts: {
        sans: "Satoshi",
      },
    }),
  ],
  shortcuts: {
    btn: "py-2 px-4 bg-neutral-900 font-semibold rounded-lg shadow-md",
  },
  transformers: [transformerVariantGroup(), transformerDirectives()],
});
