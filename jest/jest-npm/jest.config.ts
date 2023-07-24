/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type {Config} from 'jest';

const config: Config = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest",
  },
  moduleNameMapper: {
    "^@ipld/dag-cbor$": "<rootDir>/node_modules/@tbd54566975/dwn-sdk-js/dist/cjs/src/utils/cid.js",
    "^multiformats/cid$": "<rootDir>/node_modules/@tbd54566975/dwn-sdk-js/dist/cjs/src/utils/cid.js",
    "^ipfs-unixfs-importer$": "<rootDir>/node_modules/@tbd54566975/dwn-sdk-js/dist/cjs/src/utils/cid.js",
    "^blockstore-core$": "<rootDir>/node_modules/@tbd54566975/dwn-sdk-js/dist/cjs/src/utils/cid.js",
    "^hasher$": "<rootDir>/node_modules/@tbd54566975/dwn-sdk-js/node_modules/multiformats/src/hashes/hasher.js",
  },
    transformIgnorePatterns: [
    "node_modules/(?!(multiformats)/)"
  ],
  // These are from the pnpm repo
  //   moduleNameMapper: {
  //   "^@ipld/dag-cbor$": "<rootDir>/node_modules/@ipld/dag-cbor/src/index.js",
  //   "^multiformats/cid$":
  //     "<rootDir>/node_modules/@tbd54566975/dwn-sdk-js/dist/cjs/src/utils/cid.js",
  //   "^ipfs-unixfs-importer$":
  //     "<rootDir>/node_modules/.pnpm/ipfs-unixfs-importer@15.1.5/node_modules/ipfs-unixfs-importer/src/index.ts",
  //   "^it-first$":
  //     "<rootDir>/node_modules/.pnpm/it-first@3.0.2/node_modules/it-first/src/index.ts",
  //   "^it-parallel-batch$":
  //     "<rootDir>/node_modules/.pnpm/it-parallel-batch@3.0.1/node_modules/it-batch/src/index.ts",
  // },

};

export default config;
