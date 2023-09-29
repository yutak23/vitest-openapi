import { expect } from 'vitest';
import openapiValidator from 'openapi-validator';
import jestToSatisfyApiSpec from 'jest-openapi/dist/matchers/toSatisfyApiSpec.js';
import jestToSatisfySchemaInApiSpec from 'jest-openapi/dist/matchers/toSatisfySchemaInApiSpec.js';

const { makeApiSpec } = openapiValidator;

export default (filepathOrObject, schemaName) => {
	const openApiSpec = makeApiSpec(filepathOrObject);

	console.log('openApiSpec', jestToSatisfyApiSpec);

	expect.extend({
		// eslint-disable-next-line no-unused-vars
		toSatisfyApiSpec: (received, expected) => jestToSatisfyApiSpec.default(received, openApiSpec),
		// eslint-disable-next-line no-unused-vars
		toSatisfySchemaInApiSpec: (received, expected) =>
			jestToSatisfySchemaInApiSpec.default(received, schemaName, openApiSpec)
	});
};
