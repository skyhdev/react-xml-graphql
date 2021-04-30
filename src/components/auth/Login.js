import React, { useEffect } from 'react';
import { useHistory } from "react-router-dom";
import netlifyIdentity from 'netlify-identity-widget';

function Login(props) {
    const history = useHistory();

    const openNetlifyModal = () => {
        netlifyIdentity.open();
        if (props && props?.type == "signup") {
            netlifyIdentity.open('signup');
        } else {
            netlifyIdentity.open('login');
        }

        netlifyIdentity.on('login', async (user) => {
            if (user) {
                netlifyIdentity.close()
                localStorage.setItem("email", user.email)
                return history.push("/welcome");
            }
        });
    }


    useEffect(() => {
        netlifyIdentity.init({
            container: '#netlify-modal', // connect widget to div tag(div id)
            locale: 'en'
        });
        //check user already login or not
        if (netlifyIdentity.currentUser()) {
            return history.push("/dashboard");
        }
        openNetlifyModal();

    }, []);

    return (
        <div id="netlify-modal">
        </div>
    )
}

export default Login;
