import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import { userActions } from "../_actions";
import Avatar from '@material-ui/core/Avatar';
import { parsing } from "../_helpers/image";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import SystemUpdateAltIcon from '@material-ui/icons/SystemUpdateAlt';
const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 600,
      },
    input: {
        margin: '40px 0',
        width: 600,
    },
    inline: {
        display: "inline"
      },
      rootEx: {
        width: "100%"
      },
      heading: {
        fontSize: theme.typography.pxToRem(15)
      },
      icon: {
        verticalAlign: "bottom",
        height: 20,
        width: 20
      },
      large: {
        width: theme.spacing(10),
        height: theme.spacing(10)
      },
      details: {
        alignItems: "center"
      },
      column: {
        flexBasis: "33.33%"
      },
      teaml: {
        marginLeft: 100
      },
      helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2)
      },
     
}));
const useStyless = makeStyles({
    root: {
      minWidth: 275,
    },
  
  });
  
export const ProfileInfos = () => {
    const classes = useStyles();
    const classesList = useStyles();
    const classes1 = useStyless();

    const user = useSelector(state => state.authentication.user)
    const dispatch = useDispatch();
    /**
     * Initialising the user data in the state
     */
    const [email, setEmail] = useState(user.email)
    const [name, setName] = useState(user.name)
    const [prename, setPrename] = useState(user.prename)
    const [username, setUsername] = useState(user.username)
    const [sumonnerName, setSumonnerName] = useState(user.sumonnerName)
    const [userImage, setUserImage] = useState(user.userImage)
    const handleSubmit = () => {
        const payload = {
            email,
            name,
            prename,
            username,
            sumonnerName,
            userImage,
        }
        dispatch(userActions.updateUser(payload))
    }
    return (
        <div>
<Card className={classes1.root}>
      <CardContent  className="col-md-8 col-md-offset-2">
      <h2>Profile page</h2>

{/*<img src={parsing(`localhost:3001/${userImage}`)} >*/}
 <div className={classes.input}>
        { 
            userImage && <Avatar alt="Remy Sharp"  src="https://trello-members.s3.amazonaws.com/5c6de55525f9520704469c66/555576654b9ba02ff939998a2baff98e/original.png" className={classesList.large} />
        }
        <input onChange={e => setUserImage(e.target.files[0])} type="file" />
    </div>
    
    <div className={classes.input}>
        <TextField style={{ width: "270px" }}
            value={username}
            id="standard-basic"
            label="Username"
            onChange={e => setUsername(e.target.value)}
        />
    </div>
    <div className={classes.input}>
        <TextField
            style={{ width: "270px" }}
            value={name}
            id="standard-basic"
            label="first Name"
            onChange={e => setName(e.target.value)}
            defaultValue="Oumaima"
        />
    </div>
    <div className={classes.input}>
        <TextField
            style={{ width: "270px" }}
            value={prename}
            id="standard-basic"
            label="Last Name"
            onChange={e => setPrename(e.target.value)}
            defaultValue="Nefzi"

        />
    </div>
    <div className={classes.input}>
        <TextField
            value={email}
            id="standard-basic"
            style={{ width: "270px" }}
            label="Email"
            onChange={e => setEmail(e.target.value)}
        />
    </div>
    <div className={classes.input}>
        <TextField
            value={sumonnerName}
            id="standard-basic"
            style={{ width: "270px" }}
            label="Summoner Name"
            onChange={e => setSumonnerName(e.target.value)}
        />
    </div>
    {/* <Button onClick={handleSubmit} variant="contained" color="primary" type='submit'>      
     <SystemUpdateAltIcon></SystemUpdateAltIcon>
      Update</Button> */}  
      </CardContent>
     
    </Card>
            
            </div>
  

    )
}