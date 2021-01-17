import React from 'react'
import Course from '../components/Courses';
import axios from 'axios';

let getClasses = async () => {
    return axios({
        method: 'get',
        url: "http://127.0.0.1:8000/classes/all",
    })
}

const courses = () => {
    return (
        <div>
            <Course getCourses={getClasses}></Course>
        </div>
    )
}

export default courses;
