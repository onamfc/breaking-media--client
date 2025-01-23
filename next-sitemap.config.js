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

        // Add the /articles page explicitly
        const additionalPaths = [
            {
                loc: '/articles', // Blog roll page
                lastmod: new Date().toISOString(), // Set the current date
                priority: 0.9, // Higher priority for the blog roll
                changefreq: 'daily', // More frequent updates
            },
        ];

        // Return both the /articles page and individual article paths
        return [
            ...additionalPaths,
            ...articles.map((article) => ({
                loc: `/articles/${article.slug}`, // Adjust to match your article URL structure
                lastmod: new Date(article.updated_at || article.created_at).toISOString(),
                priority: 0.8,
                changefreq: 'weekly',
            })),
        ];
    },
};
