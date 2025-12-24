import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Optimize for production
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
        drop_debugger: true,
      },
    },
    // Generate source maps for debugging (optional)
    sourcemap: false,
    // Optimize chunk size
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'framer-motion': ['framer-motion'],
          'lucide': ['lucide-react'],
        },
      },
    },
    // Optimize asset handling
    assetsInlineLimit: 4096, // 4kb
  },
  // Server configuration for development
  server: {
    port: 5173,
    strictPort: false,
  },
  // Preview configuration
  preview: {
    port: 4173,
  },
});
