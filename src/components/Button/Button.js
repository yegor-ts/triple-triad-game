import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './Button.module.scss';

const Button = ({ color, onClick, children }) => {
  const handleClick = () => {
    onClick && onClick();
  };

  return (
    <button
      className={classNames(style.root, style[color])}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  color: 'default',
};

Button.propTypes = {
  color: PropTypes.oneOf(['default', 'black']),
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
