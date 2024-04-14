import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/search': {
        target: 'http://localhost:3333',
        changeOrigin: true,
      },
      '/slidebar': {
        target: 'http://localhost:3333',
        changeOrigin: true,
      },
      '/products': {
        target: 'http://localhost:3333',
        changeOrigin: true,
      },
    },
  },
})
