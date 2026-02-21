export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/profile/',
    },
    sitemap: 'https://unicared.tech/sitemap.xml',
  }
}