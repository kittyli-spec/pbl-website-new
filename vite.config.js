import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    hmr: {
      overlay: false
    },
    port: 5173,
    open: true
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom']
  }
}) 