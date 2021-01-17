import React from 'react'
import './signup.css'

import {SubmitSignupLink} from './SignupElement'

const Signup = () => {
    function SubmitSignupHandler(e){
        e.preventDefault()
        console.log(document.getElementById("username").value);
        console.log(document.getElementById("password").value);
        console.log(document.getElementById("email").value);
        console.log(document.getElementById("age").value);
        console.log(document.getElementById("gender").checked);
    }
    return (
        <>
        <section>
        <div class="spaceTopSignup">
            <label htmlFor="username" class="labelSignup">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Username:</label>
            <input type="text" name="username" id="username" class="loginInput"/>
        </div>
        <div>
            <label htmlFor="password" class="labelSignup">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Password:</label>
            <input type="num" name="password" id="password" class="loginInput"/>
        </div>
        <div>
            <label htmlFor="email" class="labelSignup">Email:</label>
            <input type="text" name="email" id="email" class="loginInput"/>
        </div>
        <div>
            <label htmlFor="age" class="labelSignup">Age:</label>
            <input type="number" name="age" id="age" class="loginInput"/>
        </div>
        <div>
            <label class="gender">Gender:&nbsp;&nbsp;&nbsp;M&nbsp;&nbsp;&nbsp;&nbsp;F</label>
        <label class="switch">
            <input type="checkbox" id="gender" />
            <span class="slider round"></span>
        </label>
        </div>
        <div class="container1">
        <button type="submit" class="submit"/>
        {/* eslint-disable-next-line */}
        <a href="#" onClick={SubmitSignupHandler}>
            <SubmitSignupLink to="/" class="submitButton">Submit</SubmitSignupLink>
        </a>
        </div>
        </section>
        </>
    )
}

export default Signup;
