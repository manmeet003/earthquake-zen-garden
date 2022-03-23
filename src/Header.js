import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';

const Header = (props) => {
    return (
        <div className={classes.header}>
            <div className={classes.third}><Link to="/"><img src={props.header.logoImage} /></Link></div>
           <div className={classes.third}><h1>{props.header.title}</h1></div> 
           <div className={classes.third}><Link to="/profile">Welcome {props.profile.firstName}</Link></div> 
        </div>
    )
}

export default Header;