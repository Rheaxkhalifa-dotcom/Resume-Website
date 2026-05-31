import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/YOUR-REPOSITORY-NAME/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
