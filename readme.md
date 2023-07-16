<style>
  .menu-li li{
    display:flex;
    gap: 4%
  }
  .menu-li span:first-child::after{
    content:'---------'
  }
</style>

# Dr.Zhuim's Knowledge Platform

## Project Structure

- public ---------- vite's public menu
- src ---------- Project's src
  - assets ---------- static files
    - imgs
    - styles ---------- common styles && tailwind && reset
    - react.svg
  - components
    - Articles ---------- Project's pages' components
      - public ---------- pages' public components
      - xxx ---------- pages' unique components
    - Layout ---------- Project's structure components
  - config
    - github.ts ---------- github restful api's config
  - constants
    - const.ts
  - layers ---------- routes which can be catched by Layout components automatically.
    - Posts ---------- articles
    - Snippets --------- code snippets
  - pages  ---------- routes which will be used artificially
    - Error ---------- redirect to here when getting a invalid route 
    - Home ---------- home page
  - polyfills
    - polyfills.ts ---------- to fix vite's problems
  - routes
    - getLayers.tsx ---------- golb files from Layers
    - getRoutes.tsx ---------- create routes from layers
  - types
    - type.d.ts
  - utils
    - hooks.ts ---------- custom hooks
    - utils.ts ---------- custom public functions
  - App.tsx ---------- app file
  - main.tsx ---------- entry file
  - vite-env.d.ts
- test
  - mock

## tricks

1. vite cannot find stream in commonjs env

```
npm i isomorphic-fetch -D

## vite.config.ts
  resolve: {
    alias: {
      'node-fetch': 'isomorphic-fetch',
    },
  },
```

## issues
- [ ] Xmind compilation
- [ ] Vite plugin
- [ ] Vscode Plugin that you can create a template quickly just like uniapp
- [ ] tranform Navbar from logic component to render component