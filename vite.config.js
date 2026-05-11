import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: 'dist/stats.html',
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  build: {
    target: 'esnext',
    outDir: 'dist',
    manifest: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          utils: ['lucide-react'],
        },
      },
      treeshake: {
        moduleSideEffects: ['lucide-react'],
      },
    },
    assetsInlineLimit: 4096,
    cssCodeSplit: false,
    minify: 'esbuild',
    brotliSize: true,
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
