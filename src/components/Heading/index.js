import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import style from './Heading.module.css';

const Heading = ({
    children,
    level,
    className,
    black
}) => {
    const el = `h${level}`;

    return React.createElement(el, {
        className: classNames(style.root, className, style[`level${level}`], {
            [style.colorBlack]: black
        })
    }, children);
}

Heading.propTypes = {
    children: PropTypes.node,
    level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
    className: PropTypes.string,
    black: PropTypes.bool,
}

export default Heading;
