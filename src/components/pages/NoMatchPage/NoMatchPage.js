import React from 'react';
import styles from './NoMatchPage.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const NoMatchPage = ({children, className, ...rest}) => {
  return (
    <div className={cx('no-match-page', className)} {...rest}>
        {children}
        404
    </div>
  );
};

export default NoMatchPage;