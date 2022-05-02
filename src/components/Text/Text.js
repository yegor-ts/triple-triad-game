import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import style from './Text.module.scss';

function Text({ element, children, className, strong, italic, disabled }) {
  return React.createElement(
      element,
      {
        className: classNames(className, {
          [style.strong]: strong,
          [style.italic]: italic,
          [style.disabled]: disabled,
        }),
      },
      children,
  );
}

Text.propTypes = {
  element: PropTypes.oneOf(['div', 'p', 'span']).isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  strong: PropTypes.bool,
  italic: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default Text;
