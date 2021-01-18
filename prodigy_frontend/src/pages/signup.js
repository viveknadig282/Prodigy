import React from 'react'
import Signup from '../components/Signup';

const signup = (props) => {
    return (
        <div>
            <Signup getUser={props.getUser} setUser={props.setUser}></Signup>
        </div>
    )
}

export default signup
