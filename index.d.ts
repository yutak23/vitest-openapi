import type { OpenAPISpecObject } from 'openapi-validator';

interface CustomMatchers<R = unknown> {
	toSatisfyApiSpec(): R;
	toSatisfySchemaInApiSpec(schemaName: string): R;
}

declare module 'vitest' {
	interface Assertion<T = any> extends CustomMatchers<T> {}
	interface AsymmetricMatchersContaining extends CustomMatchers {}
}

export default function (filepathOrObject: string | OpenAPISpecObject, schemaName?: string): void;
