import React from 'react'
import './listing.css'
import {SubmitListingLink} from './ListingElement'

const Listing = () => {
    function SubmitListingHandler(e){
        e.preventDefault()
        // console.log(document.getElementById("username").value);
        
    }
    return (
        <>
        <section>
        <div class="spaceTopListing">
            <label htmlFor="courseName" class="labelAdd">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name of Course:</label>
            <input type="text" name="courseName" id="courseName" class="loginInput"/>
        </div>
        <div>
            <label htmlFor="subject" class="labelAdd">&nbsp;&nbsp;Subject:</label>
            <input type="num" name="subject" id="subject" class="loginInput"/>
        </div>
        <div>
            <label htmlFor="cost" class="labelAdd">Cost:</label>
            <input type="number" name="cost" id="cost" class="loginInput"/>
        </div>
        <div>
            <label htmlFor="desc" class="labelAdd">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Description:</label>
            <textarea name="desc" cols="50" rows="10" id="desc" class="loginInput2"></textarea>
        </div>
        <div class="container1">
        <button type="submit" class="submit"/>
        {/* eslint-disable-next-line */}
        <a href="#" onClick={SubmitListingHandler}>
            <SubmitListingLink to="/" class="submitButton">Submit</SubmitListingLink>
        </a>
        </div>
        </section>
        </>
    )
}

export default Listing;
