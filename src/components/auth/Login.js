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
                return history.push("/dashboard");
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
            console.log("forwarding to dashboard")
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
