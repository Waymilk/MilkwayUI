// 请先安装 rollup-plugin-esbuild rollup-plugin-vue rollup-plugin-scss sass rollup-plugin-terser
// 为了保证版本一致，请复制我的 dist.json 到你的项目，并把 name 改成你的库名
import esbuild from 'rollup-plugin-esbuild';
import vue from 'rollup-plugin-vue';
import less from 'rollup-plugin-scss';
import dartSass from 'sass';
import {terser} from 'rollup-plugin-terser';

export default {
	input: 'src/lib/index.ts',
	output: [
		{
			globals: {
				vue: 'Vue',
			},
			name: 'milkway-ui',
			file: 'dist/lib/milkway-ui.js',
			format: 'umd',
			plugins: [terser()],
		}, {
			name: 'milkway-ui',
			file: 'dist/lib/milkway-ui.esm.js',
			format: 'es',
			plugins: [terser()],
		}],
	plugins: [
		less({include: /\.scss$/, less: dartSass}),
		esbuild({
			include: /\.[jt]s$/,
			minify: process.env.NODE_ENV === 'production',
			target: 'es2015',
		}),
		vue({
			include: /\.vue$/,
		}),
	],
};
