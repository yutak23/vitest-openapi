import { describe, it, expect, beforeAll } from 'vitest';
import appRootPath from 'app-root-path';

import vitestOpenAPI from '../index.js';

describe('Recreate bug (issue #XX)', () => {
  beforeAll(() => {
    const pathToApiSpec = appRootPath.resolve('/tests/exampleOpenApiFiles/valid/openapi3.yml');
    vitestOpenAPI(pathToApiSpec);
  });

  const res = {
    status: 200,
    req: {
      method: 'GET',
      path: '/responseBody/string'
    },
    body: 'foo'
  };

  it('passes', () => {
    expect(res).toSatisfyApiSpec();
  });
});
