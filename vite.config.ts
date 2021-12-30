import { defineConfig } from "vite";
import { resolve } from 'path';

const config = defineConfig({
  resolve: {
    alias: {
      '@': `${resolve(__dirname, 'src')}`
    }
  },

  build: {
    minify: true,
  },

  plugins: [],
})

export default config;