import { useState, useEffect } from "react";
import ArticleList from "./components/ArticleList";
import ArticleForm from "./components/ArticleForm";
import ArticleView from "./components/ArticleView";
import { loadArticles, saveArticles } from "./utils/localStorage";
import "./App.css";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticleIndex, setSelectedArticleIndex] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setArticles(loadArticles());
  }, []);

  const saveArticle = (newArticle) => {
    const updatedArticles = [...articles];
    if (selectedArticleIndex !== null) {
      updatedArticles[selectedArticleIndex] = newArticle;
    } else {
      updatedArticles.push(newArticle);
    }
    setArticles(updatedArticles);
    saveArticles(updatedArticles);
    setSelectedArticleIndex(null);
    setIsEditing(false);
  };

  const selectArticle = (index) => {
    setSelectedArticleIndex(index);
    setIsEditing(false);
  };

  const handleAddArticle = () => {
    setSelectedArticleIndex(null);
    setIsEditing(true);
  };

  const renderContent = () => {
    if (isEditing) {
      return (
        <ArticleForm
          article={
            selectedArticleIndex !== null ? articles[selectedArticleIndex] : {}
          }
          onSave={saveArticle}
        />
      );
    }

    if (selectedArticleIndex === null) {
      return (
        <div className="welcome-page">
          Welcome to the Wiki App! Select an article from the sidebar.
        </div>
      );
    }

    return (
      <ArticleView
        article={articles[selectedArticleIndex]}
        onEdit={() => setIsEditing(true)}
      />
    );
  };

  return (
    <>
      <div className="app">
        <div className="sidebar">
          <ArticleList
            articles={articles}
            onSelect={selectArticle}
            onAdd={handleAddArticle}
          />
        </div>
        <div className="main-content">{renderContent()}</div>
      </div>
    </>
  );
};

export default App;
