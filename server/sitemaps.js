sitemaps.add('/sitemap.xml', function() {
    // 'page' is reqired
    // 'lastmod', 'changefreq', 'priority' are optional.
    return [
        { page: '/article/', lastmod: new Date().getTime() },
        { page: '/', lastmod: new Date().getTime(), changefreq: 'monthly' },
        { page: '/about', lastmod: new Date().getTime(), changefreq: 'monthly', priority: 0.8 }
    ];
});