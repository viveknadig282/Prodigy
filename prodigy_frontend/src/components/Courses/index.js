import React from 'react'
import courses from './courseObject.json'
import './course.css'
import StarRatings from 'react-star-ratings';
import {CourseLink} from './courseElement'


class Class extends React.Component {
    constructor(props) {
        super(props)
        console.log('class props')
        console.log(props)
    }

    render() {
    return (
        <a href="#">
        {/* <SubmitSignupLink to="/" class="submitButton">Submit</SubmitSignupLink> */}
            <button className="Course_container" id={`class${this.props.value}`} onClick={this.props.onClick}>
                <span>
                    <CourseLink to="/infopage">
                        <h3 className="Course_name">{this.props.name}</h3>
                        <h3 className="Course_teacher">{this.props.teacher}</h3>
                        <h3 className="Course_cost">${this.props.cost}</h3>
                        <StarRatings
                            rating={parseFloat(this.props.avr_rating, 5)}
                            starDimension="20px"
                            starSpacing="15px"
                            starRatedColor="RGB(255,255,0)"
                            starEmptyColor="RGB(255,255,255)"
                        />
                    </CourseLink>
                </span>
            </button>
        </a>   
        );
    }
}

class Course extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            courses: [{}]
        } 
        props.getCourses().then(response => {
            this.setState({
                courses: response.data.courses
            })
            console.log(this.state)
            // console.log(response.data.courses)
        })
    }

    createClass = (item, i) => {
        console.log(item, i)
        return <Class value={item.id} onClick={this.handleClick} name={item.name || ""} teacher={item.teacher || ""} cost={item.cost || 0} avr_rating={item.avr_reviews || 0}/>
    }

    handleClick = (event) => {
        console.log(event.target.id)
        // console.log(document.getElementById(`class${i}`));
    }

    render() {
        return <>
            <div class="Overall_Container">
                {this.state.courses.map((item, i) => {return this.createClass(item, i)})} 
            </div>
            </>
    }
}

export default Course;
