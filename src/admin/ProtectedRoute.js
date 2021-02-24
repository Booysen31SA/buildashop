import React from "react";
import { Redirect } from 'react-router-dom';

export default class ProtectedRoute extends React.Component {

    render() {
        const Component = this.props.component;
        const isAuthenticated = sessionStorage.getItem('isLoggedIn') === null ? false : sessionStorage.getItem('isLoggedIn');

        return isAuthenticated ?
            (
                <Component />
            )
            :
            (
                <Redirect to={{ pathname : '/admin/login' }} />
            );

    }
}