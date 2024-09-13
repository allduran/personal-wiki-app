// ArticleView.jsx
import PropTypes from "prop-types";
import Button from "./Button";
import "../styles/ArticleView.css";

const ArticleView = ({ article, onEdit, onDelete }) => {
  return (
    <div className="article-view">
      <div className="button-group">
        <Button className="edit-button" onClick={onEdit}>
          Edit
        </Button>
        <Button className="delete-button" onClick={onDelete}>
          Delete
        </Button>
      </div>
      <h2>{article.title}</h2>
      <p>{article.content}</p>
    </div>
  );
};

ArticleView.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ArticleView;
