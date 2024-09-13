// ArticleForm.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";
import  "../styles/ArticleForm.css";

const ArticleForm = ({ article, onSave }) => {
  const [title, setTitle] = useState(article?.title || "");
  const [content, setContent] = useState(article?.content || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, content });
  };

  return (
    <div className="article-form">
      <h2>{article ? "Edit Article" : "New Article"}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter article title"
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Enter article content"
          />
        </div>
        <Button type="submit" className="submit-button">
          Save Article
        </Button>
      </form>
    </div>
  );
};

ArticleForm.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
  }),
  onSave: PropTypes.func.isRequired,
};

export default ArticleForm;
