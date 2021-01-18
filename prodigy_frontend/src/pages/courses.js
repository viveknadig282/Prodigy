import React from 'react'
import Course from '../components/Courses';
import axios from 'axios';

let getClasses = async () => {
    return axios({
        method: 'get',
        url: "http://127.0.0.1:8000/classes/all",
    })
}

const courses = (props) => {
    return (
        <>
        <div>
            <Course getCourses={getClasses} getUser={props.getUser} setUser={props.setUser}></Course>
        </div>
        
        </>
    )
}

export default courses;
