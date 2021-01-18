import React from 'react';
import Login from '../components/Login';
const signin = (props) => {
    return (
        <>
            <Login getUser={props.getUser} setUser={props.setUser}/>
        </>
    )
}

export default signin
