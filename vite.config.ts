import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import preact from '@preact/preset-vite';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), preact()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
