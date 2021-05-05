import React, { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
import netlifyIdentity from 'netlify-identity-widget';
import { useRealmApp } from '../realm/RealmAppProvider';
import { Spinner } from 'react-bootstrap';
import "./login.css"

function Login(props) {
    const [isNetlifyClosed, setIsNetlifyClosed] = useState(false);

    const history = useHistory();
    const app = useRealmApp();
    const openNetlifyModal = () => {

        netlifyIdentity.open();
        if (props && props?.type == "signup") {
            netlifyIdentity.open('signup');
        } else {
            netlifyIdentity.open('login');
        }

        netlifyIdentity.on('login', async (user) => {
            if (user) {
                localStorage.setItem("email", user.email);
                netlifyIdentity.close();
                setIsNetlifyClosed(true);
                let userData = await app.login(user.email);
                if (!userData) {
                    userData = await app.signup(user.email)
                }
                console.log(userData);
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

        return () => {
            netlifyIdentity.off('login');
        }
    }, []);
    return (
        <div className="mainContainer">
            { isNetlifyClosed && <Spinner className="customSpinner" animation="border" variant="info" />}
            <div id="netlify-modal">
            </div>
        </div>
    )
}

export default Login;
