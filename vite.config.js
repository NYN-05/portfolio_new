import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss(), react()],
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
  server: {
    host: '0.0.0.0',
    allowedHosts: ['missions-zinc-commands-compatibility.trycloudflare.com'],
    hmr: {
      overlay: false,
    },
  },
  css: {
    devSourcemap: false,
  },
})
