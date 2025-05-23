import { NextApiRequest, NextApiResponse } from 'next'

const BASE_URL = process.env.BASE_URL

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const pages = [
    '/',
    '/#features',
    '/#how-it-works',
    '/#solutions',
    '/#about',
    '/#pricing',
    '/#faq',
    '/#blog',
    '/#careers',
    '/#contact',
    '/#privacy',
    '/#terms',
    '/#cookies',
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
  <url>
    <loc>${BASE_URL}${page}</loc>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  `
    )
    .join('')}
</urlset>`

  res.setHeader('Content-Type', 'application/xml')
  res.status(200).send(sitemap)
}