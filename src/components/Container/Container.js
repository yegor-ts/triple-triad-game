import classNames from 'classnames';
import PropTypes from 'prop-types';

import style from './Container.module.css';

const Container = ({ children, className }) => {
    return (
        <div className={classNames(style.root, className)}>
            {children}
        </div>
    );
}

Container.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export default Container;
