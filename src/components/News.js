import React, { useEffect, useState } from "react";
import "./news.css";

function News() {
  const [language, setLanguage] = useState("no");
  const [articles, setArticles] = useState([]);
  const [query, setQuery] = useState("");

  const fetchNews = () => {
    const queryString = query
      ? `q=${query}&country=${language}&category=technology`
      : `country=${language}&category=technology`;
    const url = `https://newsapi.org/v2/top-headlines?${queryString}`;
    fetch(url, {
      method: "GET",
      headers: {
        "X-Api-Key": "aa9fb7c4a9164fdb909ede436b864e00"
      }
    })
      .then(response => response.json())
      .then(json => {
        setArticles(json.articles);
      });
  };

  useEffect(() => {
    fetchNews();
  }, [language, query]);

  const goToArticle = url => {
    window.open(url, "_blank");
  };

  return (
    <React.Fragment>
      <form>
        <input
          type="search"
          id="search"
          name="search"
          aria-label="Search"
          placeholder="Search for technology news..."
          onKeyUp={e => setQuery(e.target.value)}
        />
        <input
          id="us"
          type="radio"
          name="language"
          value="us"
          checked={language === "us"}
          onChange={() => setLanguage("us")}
        />
        <label htmlFor="us">English (US)</label>
        &nbsp;
        <input
          id="no"
          type="radio"
          name="language"
          value="no"
          checked={language === "no"}
          onChange={() => setLanguage("no")}
        />
        <label htmlFor="en">Norwegian</label>
      </form>
      <div className="news_articles">
        {articles &&
          articles.map((article, index) => {
            return (
              <div
                key={index}
                className="news_article"
                onClick={() => goToArticle(article.url)}
              >
                <h3>{article.title}</h3>
                <p>
                  <img
                    width="200px"
                    src={article.urlToImage}
                    alt={article.name}
                  />
                  {article.description}
                </p>
              </div>
            );
          })}
        {articles.length === 0 && <span>No articles found</span>}
      </div>
    </React.Fragment>
  );
}

export default News;
