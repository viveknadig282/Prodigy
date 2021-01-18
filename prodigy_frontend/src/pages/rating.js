import React from 'react'
import Rate from '../components/Rating'

const Rating = (props) => {
    return (
        <div>
            <Rate getUser={props.getUser} setUser={props.setUser}></Rate>
        </div>
    )
}

export default Rating;
