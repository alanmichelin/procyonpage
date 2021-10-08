import { makeStyles } from '@material-ui/core/styles';
import zIndex from '@material-ui/core/styles/zIndex';
export const useStyles = makeStyles((theme) => ({

    Icon:{
        display: 'inline-block',
        cursor:"pointer",
        padding:'2.5px',
        margin:'0.5em',
        '&:hover':{
            fontSize:'2rem'
        }
    },

    div:{
        height:'105vh',
        color:'black',
    },
    logo:{
      '&:hover':{
        cursor:'pointer',
        filter: 'drop-shadow(0px 10px 15px #a5a65d)'
      },
      '&:active':{
        filter: 'drop-shadow(10px 0px 15px #ffff00)'
      }
    },
    socialMedia:{

      backgroundColor:'blue',
      zIndex:'5',
      height:'300px'
    },
    icon:{
        color:'white',
        fontSize:'6em'
    },
    animation:{
	        animation: 'rotate-vert-center 0.5s cubic-bezier(0.455, 0.030, 0.515, 0.955) both;'
    },
    text:{
      color:'white'
    },
    sponsor:{
      left:'50%',
      maxWidth:'10em',
      // marginTop:'10vw',
      marginLeft:'5em',
      marginRigth:'5em'
      // bottom:'2em'
    }
  }));