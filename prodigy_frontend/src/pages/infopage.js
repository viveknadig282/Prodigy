import React from 'react'
import Infopage from '../components/Infopage';

const infopage = (props) => {
    return (
        <>
            <Infopage getUser={props.getUser} setUser={props.setUser}></Infopage>
        </>
    )
}

export default infopage
