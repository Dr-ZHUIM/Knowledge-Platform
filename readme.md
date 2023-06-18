# Dr.Zhuim's Knowledge Platform

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