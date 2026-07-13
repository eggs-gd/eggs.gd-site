import type { PageLoad } from './$types';
import { parseCatalog } from '$lib/catalog';
import catalogMarkdown from '../../content/catalog.md?raw';

export const load: PageLoad = () => {
	return {
		catalog: parseCatalog(catalogMarkdown)
	};
};
