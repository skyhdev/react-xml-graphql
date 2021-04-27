import React, { Component, useEffect } from 'react';
import { useHistory } from "react-router-dom";

function Login(props) {
    const history = useHistory();
    const openNetlifyModal = () => {
        if (netlifyIdentity) {
            netlifyIdentity.init();
            netlifyIdentity.open();
            if (props && props?.type == "signup") {
                netlifyIdentity.open('signup');
            } else {
                netlifyIdentity.open('login');
            }
            netlifyIdentity.on('login', async (user) => {
                netlifyIdentity.close();
                history.push("/dashboard");
            });

            netlifyIdentity.on('logout', () => {
                history.push("/");
            });
        }
    }


    useEffect(() => {
        //check user already login or not
        if (netlifyIdentity && netlifyIdentity.currentUser()) {
            netlifyIdentity.close();
            history.push("/dashboard");
        }
        netlifyIdentity.init({
            container: '#netlify-modal', // connect widget to div tag(div id)
            locale: 'en'
        });
        openNetlifyModal();
    }, []);

    return (
        <div id="netlify-modal">
        </div>
    )
}

export default Login;
