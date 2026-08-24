# tersify

[![NPM version][npm-image]][npm-url]
[![NPM downloads][downloads-image]][downloads-url]

[![GitHub NodeJS][github-nodejs]][github-action-url]
[![Codecov][codecov-image]][codecov-url]

[![Changesets][changesets-image]][changesets-url]

[![Visual Studio Code][vscode-image]][vscode-url]

Create a readable terse representation of the subject.

You can specify `maxLength` to further trim the resulting string.

You can also override the result by providing your own `tersify()` function on the subject.

```ts
import { tersify } from 'tersify'

// `() => 'foo'`
tersify(() => { return 'foo' })

// `fn(x, y) { return x + y; }`
tersify(function (x, y) { return x + y })

// `fn foo(y) { return y++; }`
tersify(function foo(y) { return y++ })

// Change result to 80 character long.
// result will have `...` to indicate info missing.
// e.g. `{ a: 'a', ... }`
tersify({...}, { maxLength: 80 })

// '{ a: 1 }`
tersify({ a: 1 })

// `() => Sym(abc)`
tersify(() => { return Symbol.for(abc) })
```

## `tersible`

Inject a `tersify()` function to the subject.

```ts
import { tersible } from 'tersify'

const increment = tersible(
	a => a + 1,
	() => 'a++'
)
increment.tersify() // 'a++'

// `{ a: 1 }`
tersible({ a: 1 }, function () {
	return `{ a: ${this.a} }`
}).tersify()

const decrement = tersible(a => a--, 'a--')
decrement.tersify() // 'a--'

// `a: 10`
tersible({ a: 1 }, options => `a: ${options.maxLength}`).tersify({ maxLength: 10 })
```

## `Tersiblized`

Mixin `Tersible` to a class.

```ts
import { Tersiblized } from 'tersify'

class Foo {
	a = 1
}
class Boo extends Tersiblized(Foo, function () {
	return `{ a: ${this.a} }`
}) {}

const boo = new Boo()
boo.a = 3
boo.tersify() // '{ a: 3 }'
```

[changesets-image]: https://img.shields.io/badge/maintained%20with-changesets-176de3.svg
[changesets-url]: https://github.com/changesets/changesets
[codecov-image]: https://codecov.io/gh/cyberuni/tersify/branch/main/graph/badge.svg
[codecov-url]: https://codecov.io/gh/cyberuni/tersify
[downloads-image]: https://img.shields.io/npm/dm/tersify.svg?style=flat
[downloads-url]: https://npmjs.org/package/tersify
[github-nodejs]: https://github.com/cyberuni/tersify/actions/workflows/release.yml/badge.svg
[github-action-url]: https://github.com/cyberuni/tersify/actions
[npm-image]: https://img.shields.io/npm/v/tersify.svg?style=flat
[npm-url]: https://npmjs.org/package/tersify
[vscode-image]: https://img.shields.io/badge/vscode-ready-green.svg
[vscode-url]: https://code.visualstudio.com/
