export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/personal-info', '/me', '/career'],
    },
    sitemap: 'https://unicared.tech/sitemap.xml',
  }
}