import React from 'react'
import axios from 'axios'
import './login.css'

import {SubmitLink} from './LoginElement'

const Login = () => {
    function SubmitHandler(e){
        e.preventDefault()
        console.log(document.getElementById("username").value);
        console.log(document.getElementById("password").value);
        const data = {
            username: document.getElementById("username").value,
            password: document.getElementById("password").value 
        }
        const config = {
            url: "http://127.0.0.1:8000/accounts/login",
            method: "POST",
            headers: {"Content-Type": "multipart/form-data"},
            data: data,
        }
        console.log(config)
        axios(config)
            .then(response => {
                console.log("request done")
                console.log(response.data)
            })
            .catch(error => {
                console.log(error)
            });

    }
    return (
        <>
        <section>
        <form>
            <div class="spaceTop">
                <label htmlFor="username" class="labelLogin">Username:</label>
                <input type="text" name="username" id="username" class="loginInput"/>
            </div>
            <div>
                <label htmlFor="password" class="labelLogin">Password:</label>
                <input type="password" name="password" id="password" class="loginInput"/>
            </div>
            <div class="container1">
            <input type="submit" class="submit"/>
            {/* <Submit /> */}
            {/* eslint-disable-next-line */}
            <a href="#" onClick={SubmitHandler}>
                <SubmitLink to="/" class="submitButton">Submit</SubmitLink>
            </a>
        </div>
        </form>
        </section>
        </>
    )
}

export default Login;
