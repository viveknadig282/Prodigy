import React from 'react'
import axios from 'axios'
import './login.css'

import {SubmitLink} from './LoginElement'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            validity: "",
            passwordStatus: "",
            usernameStatus: ""
        }
    }
    SubmitHandler = async (e) => {
        e.preventDefault()
        console.log(document.getElementById("username").value);
        console.log(document.getElementById("password").value);
        this.setState({
            passwordStatus: ""
        })
        let data = new FormData();
        data.append('username', document.getElementById("username").value);
        data.append('password', document.getElementById("password").value);
        let response = await axios({
            method: 'post',
            url: "http://127.0.0.1:8000/accounts/login",
            data: data,
            headers: {'Content-Type': 'multipart/form-data' }
            })
        
        if (response.data.hasOwnProperty('valid')) {
            if (!response.data.valid) {
                this.setState({
                    passwordStatus: "",
                    usernameStatus: "",
                    validity: "The username or password was incorrect"
                })
            } else {
                this.setState({
                    passwordStatus: "",
                    usernameStatus: "",
                    validity: "Redirecting..."
                }) 
            }
        }
        
        else if (response.data.hasOwnProperty('error')) {
            if (response.data.error.hasOwnProperty('password')) {
                this.setState({
                    passwordStatus: response.data.error.password[0]
                })
            } else {
                this.setState({
                    validity: "",
                    passwordStatus: ""
                }) 
            }
            if (response.data.error.hasOwnProperty('username')) {
                this.setState({
                    validity: "",
                    usernameStatus: response.data.error.username[0]
                })
            } else {
                this.setState({
                    usernameStatus: ""
                }) 
            }
        }
    }
    render() {
    
    return <>
        <section>
        <form>
            
            <div class="spaceTop">
            <label className="error">{this.state.validity}</label>
                <label htmlFor="username" class="labelLogin">Username:</label>
                <input type="text" name="username" id="username" className="loginInput"/>
                <br></br>
                <label className="error">{this.state.usernameStatus}</label>
            </div>
            <div>
                <label htmlFor="password" class="labelLogin">Password:</label>
                <input type="password" name="password" id="password" class="loginInput"/>
                <br></br>
                <label className="error">{this.state.passwordStatus}</label>
            </div>
            <div class="container1">
            <input type="submit" class="submit"/>
            {/* <Submit /> */}
            {/* eslint-disable-next-line */}
            <button className="submitButton" href="#" onClick={this.SubmitHandler}>
                Submit
            </button>
        </div>
        </form>
        </section>
        </>
    
    }
}

export default Login;
