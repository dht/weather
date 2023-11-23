import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    build: {
      sourcemap: false,
    },
    plugins: [react()],
    rollupOptions: {},
    define: {},
    server: {
      host: true,
      port: 3000,
    },
  };
});
