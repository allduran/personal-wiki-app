// ArticleList.jsx
import PropTypes from 'prop-types';

const ArticleList = ({ articles, onSelect }) => {
  return (
    <div>
      <h2>All Articles</h2>
      <ul>
        {articles.map((article, index) => (
          <li key={index} onClick={() => onSelect(index)}>
            {article.title}
          </li>
        ))}
      </ul>
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
    onSelect: PropTypes.func.isRequired 
}

export default ArticleList;
