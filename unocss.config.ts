import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  transformerAttributifyJsx,
} from "unocss";

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons({ scale: 1.5, warn: true }),
    presetAttributify(),
  ],
  transformers: [transformerAttributifyJsx()],
});
