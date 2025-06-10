/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.seusite.com.br', // 🔁 Substitua pelo domínio real
  generateRobotsTxt: true, // Gera também o robots.txt
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  trailingSlash: false,
};
