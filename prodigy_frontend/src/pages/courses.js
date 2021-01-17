import React from 'react'
import Course from '../components/Courses';
import axios from 'axios';

let getClasses = async () => {
    let response = await axios({
        method: 'get',
        url: "http://127.0.0.1:8000/classes/all",
    })
    return response
}

const courses = () => {
    return (
        <div>
            <Course courses={getClasses}></Course>
        </div>
    )
}

export default courses;
