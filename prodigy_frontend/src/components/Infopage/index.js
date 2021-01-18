import React from 'react'
import course from './info.json'
import './style.css'
import { withRouter } from "react-router";
import StarRatings from 'react-star-ratings';
<<<<<<< HEAD

const Infopage = () => {
    
=======
import axios from 'axios';

class Infopage extends React.Component {
    constructor(props) {
        super(props)
        const id = this.props.match.params.id;
    }

    getClassData = id => {
        return axios({
            url: `http://127.0.0.1:8000/classes/id/${id}`,
            method: "get",
        })
    }

    render() {
>>>>>>> d166a0c234d3dc764bc1091ee8f9f0f5047313ad
    return (
        <>
             {course.course.map((item, i) => (
                    <tr key={i}>
                        <div class="infoName"><p class="nameLabel"><strong>{item.name}</strong></p></div>
                        <div class="infoSubject"><p class="teachLabel"><strong>Subject</strong> <br></br>{item.subject}</p></div>
                        <div class="infoTeach"><p class="teachLabel"><strong>Teacher</strong> <br></br>{item.teacher}</p></div>
                        <div class="infoCost"><p class="costLabel"><strong>Cost</strong><br></br>${item.cost}</p></div>
                        <div class="bigContain"><p class="smallCon"><strong>Class Description:</strong><br></br>{item.desc}</p></div>
                        <div class="infoRat"><p class="ratLabel"><strong>Average Rating</strong><br></br>
                        <StarRatings
                            rating={parseFloat(item.avr_reviews, 5)}
                            starDimension="20px"
                            starSpacing="15px"
                            starRatedColor="RGB(255,255,0)"
                            starEmptyColor="RGB(255,255,255)"
                        />
                        </p></div>
                    </tr>
                ))}
            <button id="video_button" class="callBtn" onClick={()=>window.open("https://3575491e0956.ngrok.io")}>Call</button>
            <button class="chatBtn">Chat</button>
        </>
    );
    }
}

export default withRouter(Infopage);
