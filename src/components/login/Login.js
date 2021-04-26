import React, { Component, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import netlifyIdentity from 'netlify-identity-widget'
import "./login.css"

const Login = () => {
    const history = useHistory();
    function openNetlifyModal() {
        if (netlifyIdentity) {
            netlifyIdentity.open();
            netlifyIdentity.on('login', user => {
                localStorage.setItem('token', user.token.access_token)
                netlifyIdentity.close();
                history.push("/dashboard");
            });

            netlifyIdentity.on('logout', () => {
                history.push("/");
            });
        }
        else {
            history.push("/");
        }
    }

    useEffect(() => {
        if (netlifyIdentity && netlifyIdentity.currentUser()) {
            history.push("/dashboard");
        }
        netlifyIdentity.init({
            container: '#netlify-modal',
            locale: 'en'
        });
        openNetlifyModal();
    }, [])
    return (
        <div id="netlify-modal">
        </div>
    )
}

export default Login;
