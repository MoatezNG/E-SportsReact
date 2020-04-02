import React from "react";
import { useSelector } from "react-redux";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import SendIcon from "@material-ui/icons/Send";

const listStyle = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: "100ch",
    backgroundColor: theme.palette.background.paper
  },

  posi: {
    marginTop: -15,
    marginLeft: -16
  },
  button: {
    margin: theme.spacing(1)
  }
}));
export const InvitesList = () => {
  const listClasses = listStyle();
  const notification = useSelector(state => state.notification);
  return notification.map(key => {
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
              primary={key.invitingLeader.teamOwned.teamName}
              secondary="Has challenged you to a friendly match!"
            />
            <IconButton aria-label="delete">
              <SendIcon color="primary" />
            </IconButton>
            <IconButton aria-label="delete">
              <DeleteIcon color="secondary" />
            </IconButton>
          </ListItem>
        </List>
      </div>
    );
  });
};
