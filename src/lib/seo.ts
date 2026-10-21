export const SITE = 'https://eggs.gd';
export const SITE_NAME = 'earwiG Games';
export const OG_IMAGE = `${SITE}/og.png`;

/** Meta description for the home page. The long intro on the page itself is too long for a snippet. */
export const HOME_DESCRIPTION =
	'Independent software and engineering tools, built for problems I actually run into. Public projects, work in development, and prototypes.';

export const jsonLdHome = {
	'@context': 'https://schema.org',
	'@graph': [
		{
			'@type': 'Organization',
			'@id': `${SITE}/#organization`,
			name: SITE_NAME,
			alternateName: 'eGGs.gd',
			url: `${SITE}/`,
			logo: `${SITE}/earwig-dark.png`,
			sameAs: ['https://github.com/eggs-gd'],
			founder: { '@type': 'Person', name: 'Oleksandr B.', url: 'https://firestart.dev/' }
		},
		{
			'@type': 'WebSite',
			'@id': `${SITE}/#website`,
			name: SITE_NAME,
			url: `${SITE}/`,
			publisher: { '@id': `${SITE}/#organization` }
		}
	]
};
