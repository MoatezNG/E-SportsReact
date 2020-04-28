import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelActions from "@material-ui/core/ExpansionPanelActions";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import { makeStyles } from "@material-ui/core/styles";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import GroupAddRoundedIcon from '@material-ui/icons/GroupAddRounded';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CardActions from '@material-ui/core/CardActions';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Chip from '@material-ui/core/Chip';
import { userActions } from "../_actions";

const useStylesList = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: "1000ch",
    backgroundColor: theme.palette.background.paper,
   
  },
  input1: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },},
  inline: {
    display: "inline"
  },
  rootEx: {
    width: "100%"
  },
  card: {
    width: "60%",
    padding:20
   
  },
  box1: {
    width: "5%",
    
   
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
    marginLeft: 80
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(3, 3)
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline"
    },
    
  },
  column1:{
    display:"flex", 
    flexDirection:"column",
    
 },
 item:{
    display:'flex',
    
    alignItems:'center'
  },
  infos:{
    paddingLeft:30,
    paddingBottom:15

},
title: {
  fontWeight:"fontWeightBold",
  fontSize:20,
  textAlign:'center'
},
  box:{
    display:"flex", 
    flexDirection:"row",
    justifyContent:"space-evenly"
  }
}));
export const TeamList = () => {
  const classesList = useStylesList();
  const teams = useSelector(state => state.teams);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return teams.map(key => {
    return (
     
      <div key={key._id}>

        <div className={classesList.rootEx}>
          <ExpansionPanel>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1c-content"
              id="panel1c-header"
            >
              <div className={classesList.column}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/08/10-Best-Gaming-Team-Logos-and-How-to-Make-Your-Own-CurrentYear-image1-1.png"
                />
              </div>
              <div className={classesList.column}>
                <div>
                <Typography className={classesList.title} color="textSecondary" gutterBottom fontSize="h6.fontSize" m={1} ><h2> {key.teamName}</h2></Typography>  
                </div>
              </div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails >
           
            <Card className={classesList.card}>
      <CardContent>
                <div className={classesList.column1}   >
        <div  className={classesList.item}>
        <Typography className={classesList.title} color="textSecondary" gutterBottom fontSize="h6.fontSize" m={1} >TEAM LEADER</Typography>
                <ListItemAvatar>
                  <Avatar
                    className={classesList.large}
                    alt="Remy Sharp"
                    src="https://trello-members.s3.amazonaws.com/5c6de55525f9520704469c66/555576654b9ba02ff939998a2baff98e/original.png"
                  />
                </ListItemAvatar>

        <div className={classesList.infos}  >
        <Typography variant="body2" color="textSecondary" component="p">
           Username
            </Typography>
           <Typography gutterBottom variant="h6" component="h2">
           {key.teamLeader.username}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Summoner Name
            </Typography>
           <Typography gutterBottom variant="h6" component="h2">
          { key.teamLeader.sumonnerName}
          </Typography></div>
        </div>
        
        </div>
              
</CardContent>
</Card>
<div className={classesList.box1} ></div>
              <Card className={classesList.card}>
      <CardContent>
                <div className={classesList.column1}   >
        <div  className={classesList.item}>
        <Typography className={classesList.title} color="textSecondary" gutterBottom fontSize="h6.fontSize" m={1} >TEAM MEMBERS</Typography>
            

        </div>
        
        </div>
              <ExpansionPanelActions>
              <Button variant="contained" color="secondary" onClick={handleClickOpen}>
                <GroupAddRoundedIcon ></GroupAddRoundedIcon> 
               Invite
              </Button>
            </ExpansionPanelActions>
</CardContent>
</Card> 
            </ExpansionPanelDetails>
            
          </ExpansionPanel>

          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Invite Your Team</DialogTitle>
        <DialogContent>
        <TeamInvite/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Send
          </Button>
        </DialogActions>
      </Dialog>
      

        </div>
      </div>
      
    );
  });
};

export default TeamList;
export const TeamInvite = () => {
  
  const user = useSelector(state => state.authentication.user)
  const dispatch = useDispatch();
  const [email, setEmail] = useState(user.email)
  const handleSubmit = () => {
    const payload = {
        email,
    }
    dispatch(userActions.updateUser(payload))
}
const UserConnected = [
  { title: 'Oumaima ', },
  { title: 'Znob',  },
  { title: 'TRayen',  },
  { title: 'Moatez', },];

 const classesList = useStylesList();
  return (
    
    <Card className={classesList.input1}>
    <CardContent>
    <Autocomplete
        multiple
        id="tags-filled"
        options={UserConnected.map((option) => option.title)}
        defaultValue={[UserConnected[1].title]}
        TeamUsername
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip variant="outlined" label={option} {...getTagProps({ index })} />
          ))
        }
        renderInput={(params) => (
          <TextField {...params} variant="filled" label="Team Members" placeholder="Username" />
        )}
      />
    </CardContent>
   
  </Card>

  )
}
