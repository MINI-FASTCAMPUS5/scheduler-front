import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  preview: {
    port: 5173
  },
  plugins: [react(), tsconfigPaths()],
  build: {
    rollupOptions: {
      external: new RegExp('/legacy/.*')
    }
  }
})
