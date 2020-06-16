import React, { useEffect,useState } from "react";
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
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { userActions } from "../_actions";
import { teamActions } from "../_actions/team.actions";
import { TransitionAlerts } from "./notification";
import { Chart } from "./Chart";
import Divider from '@material-ui/core/Divider';

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
const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    icon: {
      verticalAlign: 'bottom',
      height: 20,
      width: 20,
    },
    details: {
      alignItems: 'center',
    },
    column: {
      flexBasis: '33.33%',
    },
    helper: {
      borderLeft: `2px solid ${theme.palette.divider}`,
      padding: theme.spacing(1, 2),
    },
    link: {
      color: theme.palette.primary.main,
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      },
      root: {
        backgroundColor: theme.palette.background.paper,
        width: 700,
      },
      small: {
        width: theme.spacing(8),
        height: theme.spacing(8),
      },
      large: {
        width: theme.spacing(9),
        height: theme.spacing(9),
      },
    },
  }));
export const AllLists = () => {
  const dispatch = useDispatch();
  const classesList = useStylesList();
  const teams = useSelector(state => state.teams);
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const [success, setSuccess] = useState(false)
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const classes = useStyles();
  const handleClose = () => {
    setTimeout(() => {
      setSuccess(true)
      console.log('Hello, World!')
    }, 3000)
    setOpen(false);
  };
  return teams.map(key => {
    return (
        <ExpansionPanel  style={{ width: "800px" ,marginLeft:"210px"}}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>All Teams</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>{key.teamName}</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
       
      <div key={key._id}>

<div className={classesList.rootEx}>
  
    <div>
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
      </div>
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
    Team Name
    </Typography>
   <Typography gutterBottom variant="h6" component="h2">
  { key.teamName}
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
 
{
success && <TransitionAlerts/> 
}

</div>
        </ExpansionPanelDetails>
        <Divider />
       
      </ExpansionPanel>

      
    );
  });
};

export default AllLists;
export const TeamInvite = () => {
  
  const user = useSelector(state => state.authentication.user)
  const dispatch = useDispatch();
const UserConnected = [
  { title: 'test1 ', },
  { title: 'OumaimaMaay',  },
  { title: 'Zaineb',  },
  { title: 'TestEsprit', },];
 
 const classesList = useStylesList();
  return (
    
    <Card className={classesList.input1}>
    <CardContent>
    <Autocomplete
        multiple
        id="tags-filled"
        options={UserConnected.map((option) => option.title)}
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
