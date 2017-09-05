import React from 'react';
import styles from './IndexPage.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';


import { NightBackground, Logo } from 'components';

const cx = classNames.bind(styles);

const IndexPage = ({children, className, ...rest}) => {
  return (
    <div className={cx('index-page', className)} {...rest}>
        <NightBackground>
            <div className={cx('column')}>
                <header className={cx('header')}>
                    <Logo className={cx('title')} />
                    <p className={cx('sub-title')}>Night Rather Than Day</p>
                    <a href="https://blog.dguri.com" className={cx('btn-go-blog')} alt="블로그 가기">Go to Blog<span>&#xE001;</span></a>
                </header>
                <article className={cx('profile')}>
                    <header className={cx('profile-header')}>
                        <div className={cx('image')}>
                            <img src={require('static/images/profile_3.jpg')} alt=""/>
                        </div>
                        <h1 className={cx('name')}>황동현</h1>
                        <p className={cx('name-eng')}>Hwang Donghyeon</p>
                        <p className={cx('row-introduce')}>낮보다 밤이 좋은 야행성 개발자</p>
                        <ul className={cx('social')}>
                            <li><a href="https://github.com/DGURI" alt="Go to dguri`s Github"><i className={cx('github')}></i></a></li>
                            <li><a href="https://www.facebook.com/dong.hyeon.hwang0358" alt="Go to dguri`s facebook"><i className={cx('facebook')}></i></a></li>
                            <li><a href="https://www.instagram.com/hdo_ogh/" alt="Go to dguri`s instagram"><i className={cx('instagram')}></i></a></li>
                        </ul>
                    </header>
                    <section className={cx('introduce')}>
                        <h2 className={cx('title')}>languages</h2>
                        <div className={cx('contents')}>
                            <ul className={cx('list')}>
                                <li><i className="devicon-nodejs-plain"/><p>node.js</p></li>
                                <li><i className="devicon-react-original"/><p>react.js</p></li>
                                <li><i className="devicon-python-plain"/><p>python</p></li>
                                <li><i className="devicon-django-plain"/><p>django</p></li>
                            </ul>
                            <ul className={cx('list')}>
                                <li><i className="devicon-java-plain"/><p>java</p></li>
                                <li><i className="devicon-php-plain"/><p>php</p></li>
                                <li><i className="devicon-laravel-plain"/><p>laravel</p></li>
                            </ul>
                            <ul className={cx('list')}>
                                <li><i className="devicon-html5-plain"/><p>html5</p></li>
                                <li><i className="devicon-css3-plain"/><p>css3</p></li>
                                <li><i className="devicon-javascript-plain"/><p>javascript</p></li>
                            </ul>
                        </div>
                    </section>
                    <section className={cx('introduce')}>
                        <h2 className={cx('title')}>stacks</h2>
                        <div className={cx('contents')}>
                            <ul className={cx('list')}>
                                <li><i className="devicon-amazonwebservices-original"/><p>aws</p></li>
                                <li><i className="devicon-docker-plain"/><p>docker</p></li>
                            </ul>
                        </div>
                    </section>
                </article>
            </div>
        </NightBackground>
    </div>
  );
};

export default IndexPage;