import React from 'react'
import './style.css'
import { withRouter } from "react-router";
import StarRatings from 'react-star-ratings';
import axios from 'axios';
// import { ThemeConsumer } from 'styled-components';

class Infopage extends React.Component {
    constructor(props) {
        super(props)
        const id = this.props.match.params.id;
        this.state = {
            id: id,
            course: {}
        }

        this.getClassData(id).then(response => {
            this.setState({
                course: response.data.course
            })
        })
    }

    getClassData = id => {
        return axios({
            url: `http://127.0.0.1:8000/classes/id/${id}`,
            method: "get",
        })
    }

    render() {
    return (
        <React.Fragment> 
            <tr key={this.state.id}>
                <div class="infoName"><p class="nameLabel"><strong>{this.state.course.name || ""}</strong></p></div>
                <div class="infoSubject"><p class="teachLabel"><strong>Subject</strong> <br></br>{this.state.course.subject || ""}</p></div>
                <div class="infoTeach"><p class="teachLabel"><strong>Teacher</strong> <br></br>{this.state.course.teacher || ""}</p></div>
                <div class="infoCost"><p class="costLabel"><strong>Cost</strong><br></br>${this.state.course.cost || 0}</p></div>
                <div class="bigContain"><p class="smallCon"><strong>Class Description:</strong><br></br>{this.state.course.desc || ""}</p></div>
                <div class="infoRat"><p class="ratLabel"><strong>Average Rating</strong><br></br>
                <StarRatings
                    rating={parseFloat(this.state.course.avr_reviews || 0, 5)}
                    starDimension="20px"
                    starSpacing="15px"
                    starRatedColor="RGB(255,255,0)"
                    starEmptyColor="RGB(255,255,255)"
                />
                </p></div>
            </tr>
            <button id="video_button" class="callBtn" onClick={()=>window.open("https://3575491e0956.ngrok.io")}>Call</button>
            <button class="chatBtn">Chat</button>
            <a href='http://localhost:3000/rating' type="button" class="addR">
         <p class="rlabel">Rate Course</p></a>
        </React.Fragment>
    );
    }
}

export default withRouter(Infopage);
