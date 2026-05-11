import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    outDir: 'dist',
    manifest: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('lucide-react')) return 'utils';
            return 'vendor';
          }
        },
      },
      treeshake: {
        moduleSideEffects: ['lucide-react'],
      },
    },
    assetsInlineLimit: 4096,
    cssCodeSplit: false,
    minify: 'esbuild',
    sourcemap: false,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    hmr: {
      overlay: false,
    },
  },
  css: {
    devSourcemap: false,
  },
})
