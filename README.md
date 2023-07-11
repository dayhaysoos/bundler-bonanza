# Bundler Bonanza

This repo includes a bunch of barebones js projects across different runtimes using various tooling (e.g. webpack, vite etc.). These projects can be used to manually test whether our packages work in these environments

> **Note**
> 
> This repo is currently WIP. It's being built out as we test `dwn-sdk-js` and `web5-js` compatibility

# `dwn-sdk-js`

> **Note**
> 
> Currently testing [this branch](https://github.com/tbd54566975/dwn-sdk-js/tree/bundling)
> 
> published version: `0.0.39-unstable-2023-07-10-aa51af9-unstable-2023-07-10-3ca8ac7`

| Runtime / Platform | ESM / CJS | Bundler                                     | Working (Y/N) | Manual Setup Required?                                                                                      | Project                                          |
| ------------------ | --------- | ------------------------------------------- | ------------- | ----------------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| `node v20.3.0`     | ESM       | N/A                                         | ✔️             | N                                                                                                           | [node-esm](./node-esm)                           |
| `node v20.3.0`     | CJS       | N/A                                         | ✔️             | N                                                                                                           | [node-cjs](./node-cjs)                           |
| Electron           | CJS       | [electron-vite](https://electron-vite.org/) | ✔️             | [Y](https://github.com/TBD54566975/bundler-bonanza/blob/main/electron-vite/src/renderer/src/App.tsx#L9-L30) | [electron-vite](./electron-vite)                 |
| Browser            | ESM       | esbuild                                     | X             | Y                                                                                                           | [browser-esbuild](./browser-esbuild)             |
| Browser            | ESM       | N/A                                         | ✔️             | N                                                                                                           | [browser-nobundler-esm](./browser-nobundler-esm) |
| Browser            | ESM       | Webpack                                     | ✔️             | [Y](https://github.com/TBD54566975/bundler-bonanza/blob/main/webpack/webpack.config.js#L10-L15)             | [webpack](./webpack)                             |
| Browser            | ESM       | Vite                                        | X             | ?                                                                                                           | [vite](./vite)                                   |
| Docusaurus         |           |                                             |               |                                                                                                             |                                                  |
| NextJS 2.0         |           |                                             |               |                                                                                                             |                                                  |


# Findings

## [electron-vite](./electron-vite)

Main process works fine.

---

Renderer process runs into this error

```
level-wrapper.ts:14 Uncaught TypeError: Level is not a constructor
    at Object.<anonymous> (level-wrapper.ts:14:10)
    at Generator.next (<anonymous>)
    at fulfilled (time.ts:18:1)
```

had to [manually instantiate all 3 stores and explicitly provide a level instance](https://github.com/TBD54566975/bundler-bonanza/blob/main/electron-vite/src/renderer/src/App.tsx#L9-L30). Need to figure out why this is happening. maybe because it's a [dynamic import](https://github.com/TBD54566975/dwn-sdk-js/blob/main/src/store/level-wrapper.ts#L10-L19)


## [browser-esbuild](./browser-esbuild)

Not currently in a working state. Need to polyfill `stream-browserify` and `crypto-browserify`.


## [webpack](./webpack)

Had to manually configure `stream-browserify` and `crypto-browserify` polyfills [here](https://github.com/TBD54566975/bundler-bonanza/blob/main/webpack/webpack.config.js#L10-L15)


## [vite](./vite)

Currently running into this:

```
level-wrapper.ts:14 Uncaught TypeError: Level is not a constructor
    at Object.<anonymous> (level-wrapper.ts:14:10)
    at Generator.next (<anonymous>)
    at fulfilled (time.ts:18:1)
```

may have to explicitly instantiate as is done for `electron-vite`.