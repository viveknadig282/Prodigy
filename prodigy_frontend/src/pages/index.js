import React from 'react';
import Search from '../components/Search';
import './index.css';

const Home = (props) => {
    return (
        <html>
        <>
        
        <Search getUser={props.getUser} setUser={props.setUser}/>
        
        </>
        </html>
        
    )
}

export default Home;
