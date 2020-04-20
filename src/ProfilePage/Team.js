import React, { useEffect,useState } from "react";
import { useStyles } from "../HomePage/HomePage";
import { TeamList } from "./TeamList";
import { useSelector, useDispatch } from "react-redux";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import { userActions } from "../_actions";
import Avatar from '@material-ui/core/Avatar';
import { parsing } from "../_helpers/image";
import { teamActions } from "../_actions/team.actions";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from "clsx";

export const Team = () => {
  const open = useSelector(state => state.drawer);
  const useStyless = makeStyles(theme => ({
    root: {
      minWidth: 130,
      marginLeft: 55,
      marginRight: 25,

    },
    input: {
      margin: '20px 0',
      width: 600,
  },
    column: {
      flexBasis: "33.33%"
    },
    title: {
      fontWeight:"fontWeightBold",
      fontSize:20
    }
}));
const useStyles1 = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(25),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const user = useSelector(state => state.authentication.user)
    const dispatch = useDispatch();
    const team = useSelector(state => state.teams);
    /**
     * Initialising the user data in the state
     */
    const [teamImage, setteamImage] = useState(team.teamImage)
    const [teamName, setteamName] = useState(team.teamName)
    const [description, setdescription] = useState(team.description)


const handleSubmit = () => {
  const payload = {
    teamImage,
    teamName,
    description
  }
  dispatch(teamActions.add(payload))
}
const classes = useStyless();
const classes1 = useStyles1();
const classesList = useStyles();
  useEffect(() => {
      console.log("l")
    dispatch(teamActions.getAllteams());
  }, []);
  return (
    <div>
      <main
        className={clsx(classesList.content, {
          [classes.contentShift]: open
        })}
      >
      
        <div style={{ marginLeft: "270px" }}>
        <Typography className={classes.title} color="textSecondary" gutterBottom fontSize="h6.fontSize" m={1} ><h3>ALL TEAMS</h3> </Typography>   
          <TeamList key="1" />
        </div>
      </main>
      <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.title} color="textSecondary" gutterBottom fontSize="h6.fontSize" m={1} > <h3>ADD A TEAM</h3></Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <div className={classes.input}>
                    { 
                        teamImage && <Avatar alt="Remy Sharp"  src="https://trello-members.s3.amazonaws.com/5c4c619706810d245f95ef7a/ec68aa9261bd15b60bb88b3301bc491e/original.png" className={classesList.large} />
                    }
                    <input onChange={e => setteamImage(e.target.files[0])} type="file" />
                </div>
                
                <div className={classes.input}>
                    <TextField
                        value={teamName}
                        id="standard-basic"
                        label="Teamname "
                        onChange={e => setteamName(e.target.value)}
                    />
                </div>
                <div className={classes.input}>
                    <TextField
                  id="outlined-multiline-static"
                  style={{ width: "270px" }}
                  label="Teamdescription"
                  multiline
                  value={description}
                  rows={7}
                  placeholder="Add a description"
                  variant="outlined"
                        onChange={e => setdescription(e.target.value)}
                    />
                </div>
                
        <Button onClick={handleSubmit} variant="contained"  type='submit' color="secondary">
                <AddIcon></AddIcon>
                <h3>ADD A TEAM</h3>
              </Button>
          
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      </div>



    
</div>
  );
};