import React from "react";
import { useSelector, useDispatch } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";

import { makeStyles } from "@material-ui/core/styles";

import SportsEsportsIcon from "@material-ui/icons/SportsEsports";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import IconButton from "@material-ui/core/IconButton";
import { notificationActions } from "../_actions";
import Typography from "@material-ui/core/Typography";

import moment from "moment";
const listStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "100ch",
    backgroundColor: theme.palette.background.paper,
  },

  posi: {},
  button: {
    margin: theme.spacing(1),
  },
}));

export const InvitesList = () => {
  const listClasses = listStyle();
  const acceptchall = (id, invil, connecu) => {
    dispatch(notificationActions.acceptChallenge(id, invil, connecu));
  };
  const dispatch = useDispatch();
  const notification = useSelector((state) => state.notification);

  const parsedUser = JSON.parse(localStorage.getItem("user"));
  if (notification.length === 0) {
    return (
      <List className={listClasses.root}>
        <ListItem alignItems="flex-start" button>
          <p
            style={{
              color: "#2E3B55",
              fontWeight: "bold",
            }}
          >
            You dont have any recent invites
          </p>
        </ListItem>
      </List>
    );
  }

  return notification.map((key) => {
    return (
      <div className={listClasses.posi} key={key.invitingLeader._id}>
        <List className={listClasses.root}>
          <ListItem alignItems="flex-start" button>
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/08/10-Best-Gaming-Team-Logos-and-How-to-Make-Your-Own-CurrentYear-image1-1.png"
              />
            </ListItemAvatar>

            <ListItemText
              primary={
                key.invitingLeader.teamOwned.teamName +
                " — Has challenged you in a friendly match !  "
              }
              secondary={
                <React.Fragment>
                  <Typography component="span" variant="body2">
                    {"At — " +
                      moment(key.DateGame).format("MMMM Do YYYY, h:mm:ss a")}
                  </Typography>

                  <p
                    style={{
                      color: "#2E3B55",
                      fontWeight: "bold",
                      margin: 0,
                    }}
                  >
                    {moment(key.createdAt).fromNow()}
                  </p>
                </React.Fragment>
              }
            />
            <IconButton
              aria-label="delete"
              onClick={() => {
                acceptchall(
                  key._id,
                  key.invitingLeader._id,
                  parsedUser.user._id
                );
              }}
            >
              <SportsEsportsIcon fontSize="large" color="primary" />
            </IconButton>
            <IconButton aria-label="delete">
              <EmojiFlagsIcon fontSize="large" color="secondary" />
            </IconButton>
          </ListItem>
        </List>
      </div>
    );
  });
};
