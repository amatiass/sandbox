import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [solidPlugin(),Unocss()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
