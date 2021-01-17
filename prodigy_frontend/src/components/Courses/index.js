import React from 'react'
import courses from './courseObject.json'
import './course.css'
import StarRatings from 'react-star-ratings';
import {CourseLink} from './courseElement'


function Class(props) {
    return (
        <a href="#">
        {/* <SubmitSignupLink to="/" class="submitButton">Submit</SubmitSignupLink> */}
            <button className="Course_container" id={`class${props.value}`} onClick={props.onClick}>
                <span>
                    <CourseLink to="/infopage">
                        <h3 className="Course_name">{props.desc}</h3>
                        <h3 className="Course_teacher">{props.teacher}</h3>
                        <h3 className="Course_cost">{props.cost}</h3>
                        <StarRatings
                            rating={parseFloat(props.avr_rating, 5)}
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

class Course extends React.Component {
    createClass = (item, i) => {
        return <Class value={i} onClick={this.handleClick} name={item.name} teacher={item.teacher} cost={item.cost} avr_rating={item.avr_rating}/>
    }

    handleClick = (event) => {
        console.log(event.target.id)
        // console.log(document.getElementById(`class${i}`));
    }

    render() {
        return <>
            <div class="Overall_Container">
                {this.props.courses.map((item, i) => {return this.createClass(item, i)})}
            </div>
            </>
    }
}

export default Course;
