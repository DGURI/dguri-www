import React from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import * as userActions from 'store/modules/user';

export const authorization = (allowedRoles) => (WrappedComponent) => {
    class WithAuthorization extends React.Component {

        componentWillMount(){
            // if(this.props.user === null){
            if(allowedRoles){
                this.props.history.push('/login');
            }
        }

        render() {
            return <WrappedComponent {...this.props} />
        }
    }

    return connect(
        (state) => ({
            // user: state.user.get('user'),
        }),
        (dispatch) => ({
            // UserActions: bindActionCreators(userActions, dispatch),
        })
    )(WithAuthorization);
};