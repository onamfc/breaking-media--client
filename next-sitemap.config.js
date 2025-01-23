module.exports = {
    siteUrl: 'https://breakingmedia.ai',
    generateRobotsTxt: true,
    changefreq: 'daily',
    priority: 0.7,
    async additionalPaths(config) {
        // Fetch articles from the server
        const articles = await fetch(`https://api.breakingmedia.ai/posts`)
            .then((res) => res.json())
            .catch(() => []);

        // Return additional paths for each article
        return articles.map((article) => ({
            loc: `/articles/${article.slug}`, // Adjust to match your article URL structure
            lastmod: new Date(article.updated_at || article.created_at).toISOString(),
            priority: 0.8,
            changefreq: 'weekly',
        }));
    },
};
