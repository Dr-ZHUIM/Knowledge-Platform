// vite.config.ts
import { defineConfig } from "file:///C:/3.research/Dr-Zhuim's%20Playground/node_modules/vite/dist/node/index.js";
import react from "file:///C:/3.research/Dr-Zhuim's%20Playground/node_modules/@vitejs/plugin-react/dist/index.mjs";
import mdx from "file:///C:/3.research/Dr-Zhuim's%20Playground/node_modules/@mdx-js/rollup/index.js";
import remarkEmoji from "file:///C:/3.research/Dr-Zhuim's%20Playground/node_modules/remark-emoji/index.js";
import { builtinModules } from "module";
import remarkGFM from "file:///C:/3.research/Dr-Zhuim's%20Playground/node_modules/remark-gfm/index.js";
import rehypeHighlight from "file:///C:/3.research/Dr-Zhuim's%20Playground/node_modules/rehype-highlight/index.js";
import path from "path";
var __vite_injected_original_dirname = "C:\\3.research\\Dr-Zhuim's Playground";
var vite_config_default = defineConfig({
  plugins: [
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
      remarkPlugins: [remarkGFM, remarkEmoji],
      rehypePlugins: [rehypeHighlight]
    })
  ],
  server: {
    port: 8080,
    open: true,
    proxy: {}
  },
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src"),
      "@imgs": path.resolve(__vite_injected_original_dirname, "./src/assets/imgs"),
      "@styles": path.resolve(__vite_injected_original_dirname, "./src/assets/styles"),
      "@const": path.resolve(__vite_injected_original_dirname, "./src/constants/const"),
      "node-fetch": "isomorphic-fetch"
    }
  },
  base: "./",
  assetsInclude: ["**/*.json"],
  optimizeDeps: {
    include: ["react", "ReactDOM", "react-router-dom", "typescript"],
    exclude: ["electron"]
  },
  build: {
    minify: "terser",
    outDir: "build",
    rollupOptions: {
      output: {
        format: "es",
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "src/assets/[ext]/[name]-[hash].[ext]"
      },
      external: ["electron", ...builtinModules]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFwzLnJlc2VhcmNoXFxcXERyLVpodWltJ3MgUGxheWdyb3VuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcMy5yZXNlYXJjaFxcXFxEci1aaHVpbSdzIFBsYXlncm91bmRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6LzMucmVzZWFyY2gvRHItWmh1aW0ncyUyMFBsYXlncm91bmQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgbWR4IGZyb20gJ0BtZHgtanMvcm9sbHVwJztcbmltcG9ydCByZW1hcmtFbW9qaSBmcm9tICdyZW1hcmstZW1vamknO1xuaW1wb3J0IHsgYnVpbHRpbk1vZHVsZXMgfSBmcm9tICdtb2R1bGUnO1xuaW1wb3J0IHJlbWFya0dGTSBmcm9tICdyZW1hcmstZ2ZtJztcbmltcG9ydCByZWh5cGVIaWdobGlnaHQgZnJvbSAncmVoeXBlLWhpZ2hsaWdodCc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuLy8gaHR0cHM6Ly92aXRlanMuZGV2L2NvbmZpZy9cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIC8qKlxuICAgICAqIG1keCBwbHVnaW5zXG4gICAgICogLSByZW1hcmtQbHVnaW5zIC0gd2hpY2ggY2FuIGVuaGFuY2UgbWR4IGJ5IHJlbWFyay14eHhcbiAgICAgKiAgIC0gc3VjaCBhcyBzdXBwb3J0IG1vcmUgY29tcG9uZW50c1xuICAgICAqIC0gcmVoeXBlUGx1Z2lucyAtIHdoaWNoIGNhbiBzdXBwb3J0IHN5bnRheCBoaWdobGlnaHRpbmdcbiAgICAgKiAgIC0gc3VjaCBhc1xuICAgICAqICAgIGBgYGpzXG4gICAgICogICAgICBjb25zb2xlLmxvZygxMjMpXG4gICAgICogICAgYGBgXG4gICAgICovXG4gICAgbWR4KHtcbiAgICAgIHJlbWFya1BsdWdpbnM6IFtyZW1hcmtHRk0sIHJlbWFya0Vtb2ppXSxcbiAgICAgIHJlaHlwZVBsdWdpbnM6IFtyZWh5cGVIaWdobGlnaHRdLFxuICAgIH0pLFxuICBdLFxuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiA4MDgwLFxuICAgIG9wZW46IHRydWUsXG4gICAgcHJveHk6IHt9LFxuICB9LFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJyksXG4gICAgICAnQGltZ3MnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvYXNzZXRzL2ltZ3MnKSxcbiAgICAgICdAc3R5bGVzJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjL2Fzc2V0cy9zdHlsZXMnKSxcbiAgICAgICdAY29uc3QnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnLi9zcmMvY29uc3RhbnRzL2NvbnN0JyksXG4gICAgICAnbm9kZS1mZXRjaCc6ICdpc29tb3JwaGljLWZldGNoJyxcbiAgICB9LFxuICB9LFxuICBiYXNlOiAnLi8nLFxuICBhc3NldHNJbmNsdWRlOiBbJyoqLyouanNvbiddLFxuICBvcHRpbWl6ZURlcHM6IHtcbiAgICBpbmNsdWRlOiBbJ3JlYWN0JywgJ1JlYWN0RE9NJywgJ3JlYWN0LXJvdXRlci1kb20nLCAndHlwZXNjcmlwdCddLFxuICAgIGV4Y2x1ZGU6IFsnZWxlY3Ryb24nXSxcbiAgfSxcbiAgYnVpbGQ6IHtcbiAgICBtaW5pZnk6ICd0ZXJzZXInLFxuICAgIG91dERpcjogJ2J1aWxkJyxcbiAgICByb2xsdXBPcHRpb25zOiB7XG4gICAgICBvdXRwdXQ6IHtcbiAgICAgICAgZm9ybWF0OiAnZXMnLFxuICAgICAgICBjaHVua0ZpbGVOYW1lczogJ3N0YXRpYy9qcy9bbmFtZV0tW2hhc2hdLmpzJyxcbiAgICAgICAgZW50cnlGaWxlTmFtZXM6ICdzdGF0aWMvanMvW25hbWVdLVtoYXNoXS5qcycsXG4gICAgICAgIGFzc2V0RmlsZU5hbWVzOiAnc3JjL2Fzc2V0cy9bZXh0XS9bbmFtZV0tW2hhc2hdLltleHRdJyxcbiAgICAgIH0sXG4gICAgICBleHRlcm5hbDogWydlbGVjdHJvbicsIC4uLmJ1aWx0aW5Nb2R1bGVzXSxcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1TLFNBQVMsb0JBQW9CO0FBQ2hVLE9BQU8sV0FBVztBQUNsQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxpQkFBaUI7QUFDeEIsU0FBUyxzQkFBc0I7QUFDL0IsT0FBTyxlQUFlO0FBQ3RCLE9BQU8scUJBQXFCO0FBQzVCLE9BQU8sVUFBVTtBQVBqQixJQUFNLG1DQUFtQztBQVV6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVdOLElBQUk7QUFBQSxNQUNGLGVBQWUsQ0FBQyxXQUFXLFdBQVc7QUFBQSxNQUN0QyxlQUFlLENBQUMsZUFBZTtBQUFBLElBQ2pDLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixPQUFPLENBQUM7QUFBQSxFQUNWO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxPQUFPO0FBQUEsTUFDcEMsU0FBUyxLQUFLLFFBQVEsa0NBQVcsbUJBQW1CO0FBQUEsTUFDcEQsV0FBVyxLQUFLLFFBQVEsa0NBQVcscUJBQXFCO0FBQUEsTUFDeEQsVUFBVSxLQUFLLFFBQVEsa0NBQVcsdUJBQXVCO0FBQUEsTUFDekQsY0FBYztBQUFBLElBQ2hCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsTUFBTTtBQUFBLEVBQ04sZUFBZSxDQUFDLFdBQVc7QUFBQSxFQUMzQixjQUFjO0FBQUEsSUFDWixTQUFTLENBQUMsU0FBUyxZQUFZLG9CQUFvQixZQUFZO0FBQUEsSUFDL0QsU0FBUyxDQUFDLFVBQVU7QUFBQSxFQUN0QjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsUUFBUTtBQUFBLElBQ1IsUUFBUTtBQUFBLElBQ1IsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sUUFBUTtBQUFBLFFBQ1IsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsUUFDaEIsZ0JBQWdCO0FBQUEsTUFDbEI7QUFBQSxNQUNBLFVBQVUsQ0FBQyxZQUFZLEdBQUcsY0FBYztBQUFBLElBQzFDO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
