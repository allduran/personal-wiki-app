// ArticleForm.jsx
import { useState } from "react";
import PropTypes from "prop-types";
import Button from "./Button";

const ArticleForm = ({ article, onSave }) => {
  const [title, setTitle] = useState(article?.title || "");
  const [content, setContent] = useState(article?.content || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ title, content });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
      </div>
      <Button type="submit">Save Article</Button>
    </form>
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
