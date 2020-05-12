import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { lighten, makeStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { userActions } from "../_actions";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import PersonIcon from '@material-ui/icons/Person';
import EditIcon from '@material-ui/icons/Edit';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import { grey, yellow } from '@material-ui/core/colors';
import LinearProgress from '@material-ui/core/LinearProgress';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrophy , faAward ,faMedal} from '@fortawesome/free-solid-svg-icons';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 420,
    height:250,
    paddingLeft:20
  },
  title: {
    fontWeight:"fontWeightBold",
    fontSize:20
  },
  pos: {
    marginBottom: 12,
  },
  box: {
    display:'flex',
    justifyContent:"center",
    paddingTop:20
  },
  boxx: {
    display:'flex',
    justifyContent:"center",
    paddingTop:20
  },
  box1:{
    display:'flex', 
    justifyContent:"space-evenly",
   
  },
  box2:{
    display:'flex', 
    justifyContent:"space-evenly",
    margin: '40px 0'
  },
  levels:{
    display:'flex', 
    justifyContent:"space-between",
    margin: '10px 0'
  },
  input:{
    margin: '20px 0'
  },
 column:{
    display:"flex", 
    flexDirection:"column",
    justifyContent:"space-evenly"
 },
 column1:{
  display:"flex", 
  flexDirection:"column",
  justifyContent:"space-between"
},
 item:{
    display:'flex',
   
  },
  infos:{
      paddingLeft:20,
      paddingBottom:15

  },
  button:{
    paddingLeft:650,

  },
  rootlevel: {
    minWidth: 520,
    height:150,
    marginTop:20
  },
  xp: {
    display:'flex',
    alignItems:'center',
    
  },
  trophies:{
    minWidth: 320,
    height:190
  },
  trophies2:{
    display:'flex',
    justifyContent:"space-evenly",
    paddingTop:10
    
  },
  award:{
     marginRight:150
  }
});
const BorderLinearProgress = withStyles({
  root: {
    height: 10,
    backgroundColor: lighten('#CEE3F6', 0.5),
  },
  bar: {
    borderRadius: 20,
    backgroundColor: '#CEE3F6',
  },
})(LinearProgress);
const useStyles1 = makeStyles((theme) => ({
    large: {
      width: theme.spacing(10),
      height: theme.spacing(10),
   

    },
  }));
  


export  function UsersProfile() {
  const user = useSelector(state => state.authentication.user)
  const dispatch = useDispatch();
  const history = useHistory();

    const selectedUser = useSelector(state => state.users.selectedUser)
    console.log(selectedUser)
    if (!selectedUser._id) {
        history.push('/')
      }
  /**
   * Initialising the user data in the state
   */
  const [email, setEmail] = useState(user.email)
  const [username, setUsername] = useState(user.username)
  const [sumonnerName, setSumonnerName] = useState(user.sumonnerName)
  const [userImage, setUserImage] = useState(user.userImage)
  const handleSubmit = () => {
      const payload = {
          username,
          userImage,
      }
      dispatch(userActions.updateUser(payload))
      setOpen(false);
  }
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  const classes1 = useStyles1();
  return (
    <div>
      <div className={classes.box}>
    <Card className={classes.root} style={{ paddingRight:40}}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom fontSize="h6.fontSize" m={1} >
            <h3>INFORMATIONS</h3>
        </Typography>
        <div>

        <div className={classes.box1} >
        { 
            userImage && <Avatar alt="Remy Sharp"  src="https://trello-members.s3.amazonaws.com/5be95433bcbec9490a1dd19d/959026d41f35ae225fd769a24a6ea660/original.png" className={classes1.large} />
        }
        <Typography className={classes.input} variant="h5" component="h2">
          { selectedUser.username
          
        }
        </Typography>
    </div> 
    

    <div className={classes.box2}>
    <div>
    <Typography variant="body2" color="textSecondary" component="p">
           Game name:
           </Typography>
           <Typography gutterBottom variant="h6" component="h2">
           League Of Legends
          </Typography>
          </div>
          
<div>
    <Typography variant="body2" color="textSecondary" component="p">
           Summoner name:
          </Typography> 
          <Typography gutterBottom variant="h6" component="h6">
         
            {
              selectedUser.sumonnerName
            }
          </Typography>
  </div>
    </div>
        </div>
      </CardContent>
    </Card>

    <Card className={classes.root}>
      <CardContent>
      <div className={classes.box} ><Typography className={classes.title} color="textSecondary" gutterBottom>
         <h3>CONTACT</h3>   
        </Typography> <Button onClick={handleClickOpen}><EditIcon  style={{ color: grey[500] }}></EditIcon></Button>
        </div>
        
        
        <div   className={classes.column}   >
        <div  className={classes.item}>
        <PersonIcon  style={{ color: grey[500] }} fontSize="large"></PersonIcon>
        <div className={classes.infos}  >
        <Typography variant="body2" color="textSecondary" component="p">
            UserName:
            </Typography>
           <Typography gutterBottom variant="h6" component="h2">
           {selectedUser.username}
          </Typography>
         </div>
        </div>

        <div  className={classes.item}>
        <MailOutlineIcon style={{ color: grey[500] }} fontSize="large"></MailOutlineIcon>
        <div className={classes.infos} >
        <Typography variant="body2" color="textSecondary" component="p">
            Email:
            </Typography>
           <Typography gutterBottom variant="h6" component="h2">
           { selectedUser.email
            }
          </Typography></div>
        </div>
        
        <div>
        { user.name
            }
        </div>
        </div>
      </CardContent>
    </Card>
    </div>
<div  className={classes.boxx}>
    <Card className={classes.trophies} >
      <CardContent >
      <Typography className={classes.title} color="textSecondary"  gutterBottom style={{ marginLeft:98 }}>
         <h3>TROPHIES</h3>  </Typography>
         
        <div className={classes.trophies2}>   
        <Typography variant="body2" color="textSecondary" component="p" className={classes.award}  > BEST MATCH  <span style={{ color: yellow[500] }} >0/5</span> </Typography> 
        <FontAwesomeIcon icon={faTrophy} size="2x"  />
        </div>
        <div className={classes.trophies2} > 
        <Typography variant="body2" color="textSecondary" component="p" className={classes.award}  > BEST PLAYER <span style={{ color: yellow[500] }} >0/5</span>  </Typography>   
        <FontAwesomeIcon icon={ faAward} size="2x" /> 
        </div>
        <div className={classes.trophies2} >   
        <Typography variant="body2" color="textSecondary" component="p"  className={classes.award}  > 1st WIN   </Typography>   
          <FontAwesomeIcon icon={ faMedal} size="2x"  /> 
        
        </div>
       
      </CardContent></Card>
      <Card className={classes.rootlevel} >
      <CardContent>
      <div className={classes.levels}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
         <h3>LEVEL1</h3>   
        </Typography>       
        <Typography variant="body2" color="textSecondary" component="p">
       <span> Compete to earn more </span> <span style={{ color: yellow[500] }} >XP</span>
        </Typography> 
    <Typography className={classes.title} color="textSecondary" gutterBottom>
         <h3>LEVEL2</h3>   
        </Typography> 
      </div>
       
        <BorderLinearProgress
        className={classes.margin}
        variant="determinate"
        color="primary"
        value={0}
      />
      <Typography variant="body2" color="textSecondary" component="p" style={{ marginLeft:210, marginTop:20 }}  >
       <span>0 / 5,000 </span> <span style={{ color: yellow[500] }} >XP</span>
        </Typography> 
      </CardContent></Card>
      
      </div>
    </div>
  );
}


