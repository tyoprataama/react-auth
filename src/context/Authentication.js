import React, {useState, useEffect, createContext} from 'react';


const ContextAuth = createContext({});

function AuthProvider({children}) {
    const [isLogIn, setIsLogIn] = useState(false);
    const [nameSection, setNameSection] = useState();

    useEffect(() => {
        const LOCAL_LOGIN =localStorage.getItem('LOCAL_LOGIN');
        const LOCAL_LOGIN_USER = localStorage.getItem('LOCAL_USER');
        if(LOCAL_LOGIN === 'true'){
            setIsLogIn(LOCAL_LOGIN_USER);
        }
    }, []);
    function Login(username, password) {
        localStorage.setItem('LOCAL_LOGIN', true);
        setIsLogIn(true);
        localStorage.setItem('LOCAL_USER', username);
        setNameSection(username);
    };

    function Logout()  {
        localStorage.setItem('LOCAL_LOGIN', false);
        setIsLogIn(false);
        localStorage.setItem('LOCAL_USER', null);
        setNameSection(null);
    };
    return <ContextAuth.Provider value={{ isLogIn, nameSection, Login, Logout }}>{children}</ContextAuth.Provider>
};

export {ContextAuth, AuthProvider};