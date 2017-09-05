import React from 'react';
import styles from './NightBackground.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const NightBackground = ({children, className, ...rest}) => {
  return (
    <div className={cx('night-background', className)} {...rest}>
        {children}
    </div>
  );
};

export default NightBackground;