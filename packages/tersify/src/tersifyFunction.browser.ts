import { hasTersifyFn } from './hasTersifyFn.js'
import { tersifyFunctionByString } from './tersifyFunctionByString.js'
import type { TersifyContext } from './typesInternal.js'

// istanbul ignore next
export function tersifyFunction(context: TersifyContext, fn: Function, _length: number): string {
	if (!context.raw && hasTersifyFn(fn) && fn.tersify !== context.defaultTersify) {
		return fn.tersify({ maxLength: context.maxLength, raw: context.raw })
	}

	return tersifyFunctionByString(fn, context)
}
