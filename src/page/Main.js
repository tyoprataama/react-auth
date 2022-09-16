import React, {useContext} from 'react';
import { ContextAuth } from '../context/Authentication';
import './Main.css';

function Main() {
    const authContext = useContext(ContextAuth);
    return (
        <div className='main-container'>
            <section className='main-sec'>
                <h1>Hello There {authContext.nameSection}</h1>
            </section>
        </div>
    );
};

export default Main;