// utils/localStorage.js
export const saveArticles = (articles) => {
    localStorage.setItem('wiki-articles', JSON.stringify(articles));
};

export const loadArticles = () => {
    const articles = localStorage.getItem('wiki-articles');
    return articles ? JSON.parse(articles) : [];
};
