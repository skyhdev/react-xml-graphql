import React, { useEffect } from 'react'
import netlifyIdentity from 'netlify-identity-widget';
import { useHistory } from "react-router-dom";

const Main = () => {
    const history = useHistory();

    useEffect(() => {
        netlifyIdentity.init();
        netlifyIdentity.currentUser() ? history.push("/dashboard") : history.push("/login");
    }, [])
    return (
        <div></div >
    )
}

export default Main
