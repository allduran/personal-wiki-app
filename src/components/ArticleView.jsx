// ArticleView.jsx
import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/ArticleView.css';

const ArticleView = ({ article, onEdit }) => {
  return (
    <div className="article-view">
        <Button className="edit-button" onClick={onEdit}>Edit</Button>
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
};

export default ArticleView;
