import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: 'src', // Esto es crucial para que Vite busque index.html en src/
  publicDir: '../public', // Si tienes una carpeta public en la raíz
  build: {
    outDir: '../dist', // La carpeta de salida para la construcción
    emptyOutDir: true, // Vaciar la carpeta de salida al construir
  },
});
