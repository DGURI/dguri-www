import React from 'react';
import styles from './LoginPage.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const LoginPage = ({children, className, ...rest}) => {
  return (
    <div className={cx('login-page', className)} {...rest}>
        {children}
        LoginPage
    </div>
  );
};

export default LoginPage;