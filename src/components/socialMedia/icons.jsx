import React from 'react'
import './animation.css'
import {useStyles} from '../styles.jsx'
const Icon = ({name, icon}) =>{
    const classes = useStyles();
    return(
        <div className={classes.Icon}>
        <i className={` ${icon} icon `}></i>
        </div>
    )
}

export default Icon