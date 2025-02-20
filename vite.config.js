import { defineConfig } from 'vite';

export default defineConfig({
	base: './',
	resolve: {
		alias: {
			'@assets': '/src/assets',
			'@components': '/src/components',
			'@constants': '/src/constants',
		},
	},
});
