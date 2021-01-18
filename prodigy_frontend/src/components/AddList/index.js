import React from 'react'
import './listing.css'
// import {SubmitListingLink} from './ListingElement'
import axios from 'axios';

class Listing extends React.Component {
    constructor(props) {
        super(props)
        console.log(this.props)

        this.state = {
            subjects: [{}],
            nameStatus: "",
            subjectStatus: "",
            costStatus: "",
            descStatus: "",
            validity: ""
        };

        this.getSubjects().then(response => {
            this.setState({
                subjects: response.data,
            })
        })
    }

    getSubjects() {
        return axios({
            url: "http://127.0.0.1:8000/classes/subjects/",
            method: "get"
        })
    }

    SubmitListingHandler = async (e) => {
        e.preventDefault()
        let data = new FormData()
        console.log(this.props)
        if (this.props.getUser() === null) {
            this.setState({
                nameStatus: "",
                subjectStatus: "",
                costStatus: "",
                descStatus: "",
                validity: "Signup or sign in first"
            })
            return
        }
        data.append('name', document.getElementById("courseName").value);
        data.append('subject', document.getElementById("subject").options[document.getElementById("subject").selectedIndex].value)
        data.append('cost', document.getElementById('cost').value)
        data.append('desc', document.getElementById('desc').value)
        data.append('teacher', this.props.getUser())

        console.log(data)
        let response = await axios({
            url: "http://127.0.0.1:8000/classes/create",
            method: "post",
            data: data,
            headers: {'Content-Type': 'multipart/form-data' },
        });
        console.log(response)
        if (response.data.hasOwnProperty('valid')) {
            if (!response.data.valid) {
                if (response.data.hasOwnProperty('error')) {
                    if (response.data.error.hasOwnProperty('user')) {
                        this.setState({
                            nameStatus: "",
                            subjectStatus: "",
                            costStatus: "",
                            descStatus: "",
                            validity: response.data.error.user[0] 
                        }) 
                    } 
                } else {
                    this.setState({
                        nameStatus: "",
                        subjectStatus: "",
                        costStatus: "",
                        descStatus: "",
                        validity: "Something went wrong"
                    })
                }
                
            } else {
                this.setState({
                    nameStatus: "",
                    subjectStatus: "",
                    costStatus: "",
                    descStatus: "",
                    validity: "Redirecting..."
                }) 
            }
        }
        
        else if (response.data.hasOwnProperty('error')) {
            if (response.data.error.hasOwnProperty('name')) {
                this.setState({
                    nameStatus: response.data.error.name[0],
                })
            } else {
                this.setState({
                    nameStatus: ""
                })
            }
            if (response.data.error.hasOwnProperty('subject')) {
                this.setState({
                    subjectStatus: response.data.error.subject[0],
                })
            } else {
                this.setState({
                    subjectStatus: ""
                })
            }
            if (response.data.error.hasOwnProperty('cost')) {
                this.setState({
                    costStatus: response.data.error.cost[0],
                })
            } else {
                this.setState({
                    costStatus: ""
                })
            }
            if (response.data.error.hasOwnProperty('desc')) {
                this.setState({
                    descStatus: response.data.error.desc[0],
                })
            } else {
                this.setState({
                    descStatus: ""
                })
            }
        }
    }

    render() {
        return (
            <React.Fragment>
            <section>
            <div class="spaceTopListing">
                <label className="error">{this.state.validity}</label>
                <label htmlFor="courseName" class="labelAdd">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name of Course:</label>
                <input type="text" name="courseName" id="courseName" class="loginInput"/>
                <br></br>
                <label className="error">{this.state.nameStatus}</label>
            </div>
            <div>
                <label htmlFor="subject" class="labelAdd">&nbsp;&nbsp;Subject:</label>
                <select name="subject" id="subject" class="loginInput">
                    {this.state.subjects.map((item, i) => {
                        return <option value={item.id}>{item.name}</option>;
                    })}
                </select>
                <br></br>
                <label className="error">{this.state.subjectStatus}</label>
            </div>
            <div>
                <label htmlFor="cost" class="labelAdd">Cost:</label>
                <input type="number" name="cost" id="cost" class="loginInput"/>
                <br></br>
                <label className="error">{this.state.costStatus}</label>
            </div>
            <div>
                <label htmlFor="desc" class="labelAdd">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Description:</label>
                <textarea name="desc" cols="50" rows="10" id="desc" class="loginInput2"></textarea>
                <br></br>
                <label className="error">{this.state.descStatus}</label>
            </div>
            <div class="container1">
            {/* <button type="submit" class="submit submitButton"/> */}
            {/* eslint-disable-next-line */}
            {/* <a href="#" onClick={this.SubmitListingHandler}>
                <SubmitListingLink to="/" class="">Submit</SubmitListingLink>
            </a> */}
            <button className="submitButton" onClick={this.SubmitListingHandler}>
                Submit
            </button>
            </div>
            </section>
            </React.Fragment>
        )
    }
}

export default Listing;
