// ArticleList.jsx
import PropTypes from 'prop-types';
import Button from './Button';
import '../styles/ArticleList.css';

const ArticleList = ({ articles, onSelect, onAdd }) => {
  return (
    <div className="article-list">
      <h2>All Articles</h2>
      <ul>
        {articles.map((article, index) => (
          <li key={index} onClick={() => onSelect(index)}>
            {article.title}
          </li>
        ))}
      </ul>
      <Button className="add-article-button" onClick={onAdd}>
        Add New Article
      </Button>
    </div>
  );
};

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string.isRequired,
            content: PropTypes.string.isRequired
        })
    ).isRequired,
    onSelect: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired
}

export default ArticleList;
