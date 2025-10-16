# vitest-openapi

[![npm](https://img.shields.io/npm/v/vitest-openapi.svg)](https://www.npmjs.com/package/vitest-openapi)
[![test](https://github.com/yutak23/vitest-openapi/actions/workflows/test.yaml/badge.svg)](https://github.com/yutak23/vitest-openapi/actions/workflows/test.yaml)
![style](https://img.shields.io/badge/code%20style-airbnb-ff5a5f.svg)
[![included](https://badgen.net/npm/types/jest-openapi)](https://github.com/yutak23/vitest-openapi/blob/main/index.d.ts)

Use Vitest to assert that HTTP responses satisfy an OpenAPI spec.

This library makes [jest-openapi](https://github.com/openapi-library/OpenAPIValidators/tree/master/packages/jest-openapi) functionality available to Vitest.

## Features

- Validates the status and body of HTTP responses against your OpenAPI spec [(see usage)](#usage)
- Validates objects against schemas defined in your OpenAPI spec [(see usage)](#usage)
- Load your OpenAPI spec just once in your tests (load from a filepath or object)
- Supports OpenAPI [2](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/2.0.md) and [3](https://github.com/OAI/OpenAPI-Specification/blob/master/versions/3.0.0.md)
- Supports OpenAPI specs in YAML and JSON formats
- Supports `$ref` in response definitions (i.e. `$ref: '#/definitions/ComponentType/ComponentName'`)
- Informs you if your OpenAPI spec is invalid
- Supports responses from `axios`, `request-promise`, `supertest`, `superagent`, and `chai-http`
- Use in [Vitest](#usage)

## Installation

### npm

```sh
$ npm install vitest-openapi
```

### yarn

```sh
$ yarn add vitest-openapi
```

## Usage

```js
import { describe, expect, it } from 'vitest';
import vitestOpenAPI from 'vitest-openapi';
import axios from 'axios';

// Load an OpenAPI file (YAML or JSON) into this plugin
vitestOpenAPI('path/to/openapi.yml');

// Write your test
describe('GET /example/endpoint', () => {
  it('should satisfy OpenAPI spec', async () => {
    // Get an HTTP response from your server (e.g. using axios)
    const res = await axios.get('http://localhost:3000/example/endpoint');

    expect(res.status).toEqual(200);

    // Assert that the HTTP response satisfies the OpenAPI spec
    expect(res).toSatisfyApiSpec();
  });
});
```

※See also the [Usage section of jest-openapi](https://github.com/openapi-library/OpenAPIValidators/tree/master/packages/jest-openapi#usage) for more information.

## Requirement

If you use TypeScript, need `vitest >= 0.31.0` (see the site [Extending Matchers](https://vitest.dev/guide/extending-matchers.html)).

## License

[MIT licensed](./LICENSE)
