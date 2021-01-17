import React from 'react'
import './login.css'

import {SubmitLink} from './LoginElement'

const Login = () => {
    function SubmitHandler(e){
        e.preventDefault()
        console.log(document.getElementById("username").value);
        console.log(document.getElementById("password").value);
    }
    return (
        <>
        <section>
        <div class="spaceTop">
            <label htmlFor="username" class="labelLogin">Username:</label>
            <input type="text" name="username" id="username" class="loginInput"/>
        </div>
        <div>
            <label htmlFor="password" class="labelLogin">Password:</label>
            <input type="num" name="password" id="password" class="loginInput"/>
        </div>
        <div class="container1">
        <button type="submit" class="submit"/>
        {/* eslint-disable-next-line */}
        <a href="#" onClick={SubmitHandler}>
            <SubmitLink to="/" class="submitButton">Submit</SubmitLink>
        </a>
        </div>
        </section>
        </>
    )
}

export default Login;
