import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      '@': path.resolve(import.meta.dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist',
    manifest: true,
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('lucide-react')) return 'icons';
            // Keep Three.js + R3F out of the initial vendor — they are lazy-loaded via FloatingScene
            if (id.includes('three') || id.includes('@react-three')) return undefined;
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
  server: {
    host: '0.0.0.0',
    hmr: { overlay: false },
  },
  css: {
    devSourcemap: false,
  },
})
