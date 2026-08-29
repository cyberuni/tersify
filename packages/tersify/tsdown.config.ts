import { inlineTypeExports } from '@repobuddy/rolldown-inline-type-exports'
import { defineConfig } from 'tsdown'

const sharedPlugins = [inlineTypeExports()]

export default defineConfig([
	{
		entry: ['src/index.ts', 'src/constants.browser.ts', 'src/tersifyFunction.browser.ts'],
		format: 'esm',
		outDir: 'esm',
		clean: true,
		dts: true,
		sourcemap: true,
		unbundle: true,
		plugins: sharedPlugins
	},
	{
		entry: ['src/index.ts', 'src/constants.browser.ts', 'src/tersifyFunction.browser.ts'],
		format: 'cjs',
		outDir: 'cjs',
		clean: true,
		dts: true,
		sourcemap: true,
		unbundle: true,
		plugins: sharedPlugins
	}
])
