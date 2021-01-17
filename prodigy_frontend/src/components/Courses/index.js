import React from 'react'
import courses from './courseObject.json'
import './course.css'
import StarRatings from 'react-star-ratings';



const Course = () => {

        return (
            <>
            <div class="Overall_Container">

                {courses.courses.map((item, i) => (
                    <button class="Course_container" key={i}><span>
                        <h3 class="Course_name">{item.name}</h3>
                        <h3 class="Course_teacher">{item.teacher}</h3>
                        <h3 class="Course_cost">{item.cost}</h3>
                        <StarRatings
                        rating={parseFloat(item.avr_rating, 5)}
                        starDimension="20px"
                        starSpacing="15px"
                        starRatedColor="RGB(255,255,0)"
                        starEmptyColor="RGB(255,255,255)"
                    />
                    </span>
                    </button>
                ))}

            </div>
            </>
        );
}

export default Course;
