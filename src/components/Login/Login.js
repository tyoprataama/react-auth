import React, {useState, useContext} from 'react';
import { ContextAuth } from '../../context/Authentication';
import './Login.css';

function LoginForm() {
    const authContext = useContext(ContextAuth);
    const [input, setInput] = useState({username: '', password: ''});
    const [error, setError] = useState();

    function onSubmitHandler(i) {
        i.preventDefault();
        if(input.username === '' || input.password === '') {
            const inputName = input.username === '' ? 'Username' : 'Password';
            return setError({
                title: 'Wrong Input',
                message: `Wrong value, please enter a correct ${inputName} value`,
            });
        }
        authContext.Login(input.username, input.password);
    };
    function onChangeHandler(i) {
        const inputVal = i.target.value;
        const inputName = i.target.name;
        setInput((prev) => ({...prev, [inputName]: inputVal}));
    };

    return (
        <div>
            <section className='login-form'>
                <div className='login-form-head'>
                    <h1>Hi There!</h1>
                </div>
                <form onSubmit={onSubmitHandler}>
                    <div>
                        <input type='text' className='form-input' name='username' placeholder='Username' value={input.username} onChange={onChangeHandler}/>
                    </div>
                    <div>
                        <input type='password' className='form-input' name='password' placeholder='Password' value={input.password} onChange={onChangeHandler}/>
                    </div>
                    <button className='btn-login' type='submit'>Login</button>
                </form>
            </section>
        </div>
    );
};

export default LoginForm;