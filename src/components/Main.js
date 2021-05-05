import React, { useEffect } from 'react'
import netlifyIdentity from 'netlify-identity-widget';
import { useHistory } from "react-router-dom";
import { useRealmApp } from './realm/RealmAppProvider';

const Main = () => {
    const history = useHistory();
    const app = useRealmApp();

    useEffect(async () => {
        netlifyIdentity.init();
        app.logout();
        netlifyIdentity.logout();
        localStorage.removeItem("email");
        netlifyIdentity.on('logout', () => {
            return history.push("/login");
        });
        setTimeout(() => {
            return history.push("/login");
        }, 1000);
    }, []);

    return (
        <div></div >
    )
}

export default Main
