import { defineConfig } from 'vite';
import inspect from 'vite-plugin-inspect';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';
import remarkEmoji from 'remark-emoji';
import { builtinModules } from 'module';
import remarkGFM from 'remark-gfm';
import remarkMath from 'remark-math';
import rehypeHighlight from 'rehype-highlight';
import remarkToc from 'remark-toc';
import rehypeKatex from 'rehype-katex';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    inspect({
      build: true,
      outputDir: '.vite-inspect',
    }),
    react(),
    /**
     * mdx plugins
     * - remarkPlugins - which can enhance mdx by remark-xxx
     *   - such as support more components
     * - rehypePlugins - which can support syntax highlighting
     *   - such as
     *    ```js
     *      console.log(123)
     *    ```
     */
    mdx({
      remarkPlugins: [
        remarkMath,
        remarkGFM,
        remarkEmoji,
        () => remarkToc({ heading: '(table[ -]of[ -])?contents?|toc|目录' }),
      ],
      rehypePlugins: [rehypeHighlight, rehypeKatex as any],
    }),
  ],
  server: {
    port: 8081,
    open: 'http://localhost:8081/blog/',
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:8080/article/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@imgs': path.resolve(__dirname, './src/assets/imgs'),
      '@styles': path.resolve(__dirname, './src/assets/styles'),
      '@const': path.resolve(__dirname, './src/constants/const'),
      '@test': path.resolve(__dirname, './test'),
      'node-fetch': 'isomorphic-fetch',
    },
  },
  base: 'http://www.zhuim.fun/blog/',
  assetsInclude: ['**/*.json'],
  optimizeDeps: {
    include: ['react', 'ReactDOM', 'react-router-dom', 'typescript'],
    exclude: ['electron'],
  },
  build: {
    minify: 'terser',
    outDir: 'myblog',
    rollupOptions: {
      output: {
        format: 'es',
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'src/assets/[ext]/[name]-[hash].[ext]',
      },
      external: ['electron', ...builtinModules],
    },
  },
});
