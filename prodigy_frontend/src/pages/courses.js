import React from 'react'
import Course from '../components/Courses';
import axios from 'axios';


class courses extends React.Component {
    getClasses = async (props) => {
        return axios({
            method: 'post',
            url: "http://127.0.0.1:8000/classes/rec",
            data: {
                'userid': this.props.getUser(),
            }
        })
    }

    render() {
        return (
            <>
            <div>
                <Course getCourses={this.getClasses} getUser={this.props.getUser} setUser={this.props.setUser}></Course>
            </div>
            
            </>
        )
    }
}

export default courses;
