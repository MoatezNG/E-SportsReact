import React from "react";
import { useSelector } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";

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
const StyledListItem = withStyles({
  root: {
    backgroundColor: "blue",
    "&$selected": {
      backgroundColor: "#DCDCDC",
    },
  },
  selected: {},
})(ListItem);
export const NotifList = () => {
  const listClasses = listStyle();

  const acceptednotification = useSelector(
    (state) => state.acceptednotification
  );

  const checkifread = (readed) => {
    if (readed) {
      return true;
    } else return false;
  };
  if (acceptednotification.length === 0) {
    return (
      <List className={listClasses.root}>
        <ListItem alignItems="flex-start" button>
          <p
            style={{
              color: "#2E3B55",
              fontWeight: "bold",
            }}
          >
            You dont have any recent notifications
          </p>
        </ListItem>
      </List>
    );
  }

  return acceptednotification.map((key, i) => {
    return checkifread(key.Readed) ? (
      <div className={listClasses.posi} key={i}>
        <List className={listClasses.root}>
          <ListItem>
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/08/10-Best-Gaming-Team-Logos-and-How-to-Make-Your-Own-CurrentYear-image1-1.png"
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                key.invitingLeader.teamOwned.teamName +
                " — Has accepted your game request  "
              }
              secondary={
                <React.Fragment>
                  <Typography component="span" variant="body2">
                    {" — The game will be played at " +
                      moment(key.DateGame).format("MMMM Do YYYY, h:mm:ss a")}
                  </Typography>
                  <p></p>
                  <p
                    style={{
                      color: "#2E3B55",
                      fontWeight: "bold",
                    }}
                  >
                    {moment(key.updatedAt).fromNow()}
                  </p>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </div>
    ) : (
      <div className={listClasses.posi} key={i}>
        <List className={listClasses.root}>
          <StyledListItem selected>
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/08/10-Best-Gaming-Team-Logos-and-How-to-Make-Your-Own-CurrentYear-image1-1.png"
              />
            </ListItemAvatar>
            <ListItemText
              primary={
                key.invitingLeader.teamOwned.teamName +
                " — Has accepted your game request  "
              }
              secondary={
                <React.Fragment>
                  <Typography component="span" variant="body2">
                    {" — The game will be played at " +
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
          </StyledListItem>
        </List>
      </div>
    );
  });
};
