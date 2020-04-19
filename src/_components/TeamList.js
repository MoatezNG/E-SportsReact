import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
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
import { useSelector, useDispatch } from "react-redux";

import DateFnsUtils from "@date-io/date-fns";

import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { notificationActions } from "../_actions";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";

import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";

import CloseIcon from "@material-ui/icons/Close";

const useStylesList = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "1000ch",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
  rootEx: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },
  icon: {
    verticalAlign: "bottom",
    height: 20,
    width: 20,
  },
  large: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  details: {
    alignItems: "center",
  },
  column: {
    flexBasis: "33.33%",
  },
  teaml: {
    marginLeft: 100,
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: "none",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  divdate: {
    height: 30,
    marginLeft: 50,
  },
}));

export const TeamList = () => {
  const classesList = useStylesList();
  const teams = useSelector((state) => state.teams);
  const [open, setOpen] = React.useState(false);
  const [selectedDate, handleDateChange] = React.useState(new Date());
  const dispatch = useDispatch();
  const parsedUser = JSON.parse(localStorage.getItem("user"));

  const [isOpened, setIsOpened] = React.useState(true);
  const [shownDate, setShownDate] = React.useState({});
  const toggle = (id) => {
    setIsOpened((prevShownChallenge) => ({
      ...prevShownChallenge,
      [id]: !prevShownChallenge[id],
    }));
  };
  const toggleDate = (id) => {
    setShownDate((prevShownDate) => ({
      ...prevShownDate,
      [id]: !prevShownDate[id],
    }));
  };
  //
  return (
    <div>
      <div>
        <Collapse in={open}>
          <Alert
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
          >
            Your challenge has been sent !
          </Alert>
        </Collapse>
      </div>
      {teams.map((key, i) => {
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
                      <h1> {key.teamName}</h1>
                    </div>
                  </div>

                  {!isOpened[key._id] && (
                    <Button
                      variant="contained"
                      color="secondary"
                      onClick={(event) => {
                        toggleDate(key._id);
                        toggle(key._id);
                        event.stopPropagation();
                      }}
                      disabled={parsedUser.user._id === key.teamLeader._id}
                    >
                      <SportsEsportsIcon></SportsEsportsIcon>
                      Challenge !
                    </Button>
                  )}
                  <div>
                    <div>
                      {shownDate[key._id] && (
                        <div>
                          <div className={classesList.divdate}>
                            <p
                              style={{
                                color: "#2E3B55",
                                fontWeight: "bold",
                              }}
                            >
                              Set your game date here
                            </p>
                          </div>
                          <Button onClick={(event) => event.stopPropagation()}>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                              <DateTimePicker
                                label="Game date"
                                inputVariant="outlined"
                                value={selectedDate}
                                onChange={handleDateChange}
                              />
                            </MuiPickersUtilsProvider>
                          </Button>
                          <Button
                            onClick={(event) => {
                              dispatch(
                                notificationActions.challengeTeam(
                                  parsedUser.user._id,
                                  key.teamLeader._id,
                                  selectedDate
                                )
                              );

                              setOpen(true);

                              event.stopPropagation();
                            }}
                          >
                            <SportsEsportsIcon
                              fontSize="large"
                              style={{ color: "#2E3B55" }}
                            ></SportsEsportsIcon>
                          </Button>
                          <Button
                            onClick={(event) => {
                              toggle(key._id);
                              toggleDate(key._id);
                              event.stopPropagation();
                            }}
                          >
                            <EmojiFlagsIcon
                              fontSize="large"
                              style={{ color: "#2E3B55" }}
                            ></EmojiFlagsIcon>
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails className={classesList.details}>
                  <div className={classesList.teaml}>
                    <h1>Team Leader</h1>
                    <ListItemAvatar>
                      <Avatar
                        className={classesList.large}
                        alt="Remy Sharp"
                        src="https://trello-members.s3.amazonaws.com/5c4c619706810d245f95ef7a/ec68aa9261bd15b60bb88b3301bc491e/original.png"
                      />
                    </ListItemAvatar>
                    <h1>{key.teamLeader.name}</h1>

                    <h3>{key.teamLeader.sumonnerName}</h3>
                  </div>

                  <div className={classesList.column} />
                  <div className={classesList.column}>
                    <h1>Members</h1>
                    {key.members.map((element) => {
                      return (
                        <List className={classesList.root} key={element.name}>
                          <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                              <Avatar
                                alt="Remy Sharp"
                                src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/08/10-Best-Gaming-Team-Logos-and-How-to-Make-Your-Own-CurrentYear-image1-1.png"
                              />
                            </ListItemAvatar>
                            <ListItemText
                              primary={element.name}
                              secondary={
                                <React.Fragment>
                                  <Typography
                                    component="span"
                                    variant="body2"
                                    className={classesList.inline}
                                    color="textPrimary"
                                  >
                                    {element.sumonnerName}
                                  </Typography>
                                  {
                                    " — I'll be in your neighborhood doing errands this…"
                                  }
                                </React.Fragment>
                              }
                            />
                          </ListItem>
                        </List>
                      );
                    })}
                  </div>
                </ExpansionPanelDetails>
                <Divider />
                <ExpansionPanelActions></ExpansionPanelActions>
              </ExpansionPanel>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TeamList;
