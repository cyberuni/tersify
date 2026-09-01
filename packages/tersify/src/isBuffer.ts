/**
 * Determines if a value is a `Buffer`.
 *
 * Duck-typed so it works in the browser without pulling in the `Buffer` global.
 * Based on `is-buffer` by Feross Aboukhadijeh (MIT).
 */
export function isBuffer(value: any): boolean {
	return (
		value != null &&
		value.constructor != null &&
		typeof value.constructor.isBuffer === 'function' &&
		value.constructor.isBuffer(value)
	)
}
