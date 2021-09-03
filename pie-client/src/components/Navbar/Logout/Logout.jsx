/*
create an image tag that has:
    an id of "logout"
    a class of "logout"
    an alt of "power button"
    a src that links to a image that will be imported called "logoutPic"
*/
import React from 'react';
import './Logout.css';
import logoutPic from '../../../assets/logout.png'

const Logout = (props) => {
    console.log(props)
    return (
        <div>
            <img id="logout" className="logout" src={logoutPic} alt="power button" 
                onClick={props.clearSession}
            />
        </div>
    )
}

export default Logout;