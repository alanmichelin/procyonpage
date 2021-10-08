import React from 'react';
import './animation.css'

import Icon from './icons'

export const SocialMedia = () =>{


    return(
        // <div><i className={`fab fa-instagram icon ${classes.icon} ${classes.animation}`} ></i></div>
            // <div onMouseOver={()=>setHovered(true)}> 
            <div >
                <Icon icon="fab fa-facebook" name='Facebook'/>
                <Icon icon="fab fa-instagram" name='Instagram'/>
                <Icon icon="fab fa-twitter" name='twitter'/>
                <Icon icon="fab fa-youtube" name='youtube'/>
                <Icon icon="fab fa-linkedin" name='linkedin'/>
                <Icon icon="far fa-envelope" name='mail'/>

                {/* <i className={`fab fa-instagram icon ${hovered? 'slide-tl':'' }  `}/>
                <i className={`fab fa-facebook icon ${hovered? 'slide-tl':'' }  `} />  */}
            </div>
    )
}