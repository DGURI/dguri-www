import React from 'react';
import styles from './IndexPage.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const IndexPage = ({children, className, ...rest}) => {
  return (
    <div className={cx('index-page', className)} {...rest}>
        {children}
        IndexPage
    </div>
  );
};

export default IndexPage;