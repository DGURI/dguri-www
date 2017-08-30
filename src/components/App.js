import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { IndexPage, LoginPage } from 'components/pages';
import styles from './App.scss';
import classNames from 'classnames/bind';

import { authorization } from "lib/authorization";

const cx = classNames.bind(styles);

class App extends Component {
    render() {
        return (
            <section className={cx('app')}>
                <Switch>
                    <Route path="/" component={authorization(truegit)(IndexPage)} exact/>
                    <Route path="/login" component={LoginPage}/>
                </Switch>
            </section>
        );
    }
}

export default App;