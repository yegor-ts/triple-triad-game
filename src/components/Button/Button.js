import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import style from './Button.module.scss';

const Button = ({ buttonText, black }) => (
  <div className={style.root}>
      <button className={classNames(style.button, {
          [style.black]: black
      })}>{buttonText}</button>
  </div>
);

Button.propTypes = {
    buttonText: PropTypes.string,
    black: PropTypes.bool
};

Button.defaultProps = {
    buttonText: 'Wow'
};

export default Button;
