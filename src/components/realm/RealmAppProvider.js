import * as Realm from "realm-web";

import React from 'react'

const RealmAppContext = React.createContext();

export const useRealmApp = () => {
    const app = React.useContext(RealmAppContext);
    if (!app) {
        throw new Error(`You must call useRealmApp() inside of a <RealmAppProvider />`);
    }
    return app;
};

export const RealmAppProvider = ({ appId, children }) => {
    const password = "Realm@Password#Scope321"
    const [app, setApp] = React.useState(new Realm.App(appId));
    const [currentUser, setCurrentUser] = React.useState(app.currentUser);

    async function login(email) {
        try {
            await app.logIn(Realm.Credentials.emailPassword(email, password));
            setCurrentUser(app.currentUser);

            return app.currentUser;
        } catch (error) {
            // console.log(error);
        }
    }

    async function signup(email) {
        try {
            await app.emailPasswordAuth.registerUser(email, password);
            let user = await logIn(email);

            return user;
        } catch (error) {

        }
    }

    async function logout() {
        try {
            await app.currentUser?.logOut();
            setCurrentUser(app.currentUser);
        } catch (error) {

        }
    }

    const wrapped = { ...app, currentUser, login, logout, signup };

    return <RealmAppContext.Provider value={wrapped}>{children}</RealmAppContext.Provider>;
};
