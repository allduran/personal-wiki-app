import PropTypes from 'prop-types';
import '../styles/Button.css';

const Button = ({ onClick, children, className, style }) => {
  return (
    <button 
      onClick={onClick} 
      className={`button ${className}`} 
      style={style}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object
};

Button.defaultProps = {
  onClick: () => {},
  className: '',
  style: {}
};

export default Button;
