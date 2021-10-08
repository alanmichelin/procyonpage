import {Paper, Grid} from '@material-ui/core'

import Background from './img/bgprocyon_2.jpg'
import Logo from './img/procyonlogo.png'
import { SocialMedia } from './socialMedia/socialMedia';
import {Sponsors} from './sponsors/sponsors'
import {useStyles} from './styles'
import './socialMedia/animation.css'
const Home = () =>{



      const classes = useStyles();
    return(
        <Grid item xs={12} lg={12} >
          
          
          <Paper className={`${classes.paper} ${classes.div}`} style={{backgroundImage:`url(${Background})`}} >
            {/* <img src={Background} alt="" srcset="" /> */}
            <img src={Logo} className={classes.logo} alt="" />

              <div className='text' style={{marginBottom:'15vh'}}>
              PROXIMAMENTE...
              </div>


            <h2 className={classes.text} style={{margin:'5vh'}}>Visita nuestras redes:</h2>
            <SocialMedia/>

            <Sponsors/>
          </Paper>
          
          <Paper>
          
          </Paper>
        </Grid>
    )
}
export default Home