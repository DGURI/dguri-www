import React from 'react';
import styles from './Logo.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Logo = ({children, className, ...rest}) => {
  return (
    <h1 className={cx('logo', className)} {...rest}>
        <Link to="/">&#xE000;DGURI&#47;&#xE001; <span>_</span></Link>
    </h1>
  );
};

export default Logo;