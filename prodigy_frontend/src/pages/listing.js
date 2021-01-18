import React from 'react';
import Listing from '../components/AddList';

const listing = (props) => {
    return (
        <div>
            <Listing getUser={props.getUser} setUser={props.setUser}/>
        </div>
    )
}

export default listing;
