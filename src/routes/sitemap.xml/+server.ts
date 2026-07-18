import type { RequestHandler } from './$types';

const site = 'https://ajeoluwasegun.com';

export const prerender = true;

export const GET: RequestHandler = () => {
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
	<url>
		<loc>${site}/</loc>
		<changefreq>monthly</changefreq>
		<priority>1.0</priority>
	</url>
</urlset>`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml' }
	});
};
