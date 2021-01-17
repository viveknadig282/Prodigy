import React from 'react'
import './search.css'
import {SearchLink} from './SearchElement'
import {AiOutlineSearch} from 'react-icons/ai';



const Search = () => {
    function handleClick(e) {
        e.preventDefault();
        console.log(document.getElementById("subject").value);
    }
    return (
        <>
        <div class = "myInput">
            <input type="text" id="subject" placeholder="   Search a course..." class="in"></input>
            {/* eslint-disable-next-line */}
            <a href="#" onClick={handleClick}>
            <SearchLink to="/courses">
                  <AiOutlineSearch class="bigbtn"></AiOutlineSearch>
            </SearchLink>
            </a>
        </div>
        
        </>
    )
}


export default Search;
