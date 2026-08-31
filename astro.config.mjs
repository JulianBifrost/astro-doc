// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Docs/FED',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Templates',
					items: [{ autogenerate: { directory: 'templates' } }],
				},
				{
					label: 'Styles',
					items: [{ autogenerate: { directory: 'styles' } }],
				},
				{
					label: 'Scripts',
					items: [{ autogenerate: { directory: 'scripts' } }],
				},
			],
		}),
	],
});
