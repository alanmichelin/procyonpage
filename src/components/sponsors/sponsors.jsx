import React from 'react';

import {useStyles} from '../styles'

import sponsor1 from './GROUP_RECICLEAN.png'
// import sponsor2 from './maxx-blanco-02.png'
import sponsor3 from './BAIRES-CERO--COP.png'
export const Sponsors = () =>{

    const classes = useStyles()

    return(

            <div style={{position:'relative', justifyContent:'center', bottom:'-25vh'}}>
                <img src={sponsor1} alt="" srcset="" className={classes.sponsor}/>
                {/* <img src={sponsor2} alt="" srcset="" className={classes.sponsor}/> */}
                <img src={sponsor3} alt="" srcset="" className={classes.sponsor}/>
            </div>
    )
}