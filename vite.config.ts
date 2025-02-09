import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Ensure assets are correctly referenced
  plugins: [react()],
  build: {
    outDir: 'dist', // Ensure the output directory is set correctly
    assetsDir: 'assets', // You can change this if you want a custom folder for assets
  },
});
