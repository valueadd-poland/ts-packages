# @valueadd/typed-urls

[![version](https://img.shields.io/npm/v/@valueadd/typed-urls.svg)](https://www.npmjs.com/package/@valueadd/typed-urls)
[![downloads](https://img.shields.io/npm/dt/@valueadd/typed-urls.svg)](https://www.npmjs.com/package/@valueadd/typed-urls)

An utility package for creating typed url addresses

## Installation

`npm install --save-dev @valueadd/typed-urls`

## Usage

Based on provided value ```urlFactory``` will indicate whether any params are expected. It will throw an error in case they are. 

```ts
import { urlFactory } from '@valueadd/typed-urls';

const url = urlFactory('http://api-domain/users/:id');

console.log(url.url({ id: '1234' }));
```
