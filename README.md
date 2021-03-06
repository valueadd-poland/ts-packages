# ValueAdd TypeScript Packages

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)
[![build](https://github.com/valueadd-poland/ts-packages/workflows/MASTER%20CI/badge.svg)](https://github.com/valueadd-poland/ts-packages/actions?query=workflow%3A%22MASTER+CI%22)

A collection of packages, modules and utilities for JavaScript developers.

| Package                                         | Description                                         | Version                                                                                                                 | Changelog                                       |
| ----------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| [`@valueadd/typed-urls`](./packages/typed-urls) | An utility package for creating typed url addresses | [![version](https://img.shields.io/npm/v/@valueadd/typed-urls.svg)](https://www.npmjs.com/package/@valueadd/typed-urls) | [changelog](./packages/typed-urls/CHANGELOG.md) |

## Development

### Setup

- `$ npm install`
- `$ npm run lerna bootstrap`

### Publish packages

- `npm run lerna version -- --conventional-commits`
- `npm run lerna publish from-git`
