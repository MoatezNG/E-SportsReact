import React from "react";
import { useSelector } from "react-redux";
import { PrimarySearchAppBar } from "../NavBar/PrimarySearchAppBar";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import useSocket from "../NavBar/socket";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  contentCenter: {
    marginLeft: 250,
  },
}));
export const Tournament = () => {
  const socket = useSocket();

  const [notifications, setNotifications] = React.useState([]);
  const parsedUser = JSON.parse(localStorage.getItem("user"));
  React.useEffect(() => {
    // step 2 : dès que le composant render (équivalent de componentDidMount), il envoie un événement "auth".
    socket.emit("auth", parsedUser.user._id);

    // step 4 : on attend constamment un événement qui s'appelle "notifications", une fois que l'événement est reçu, on récupère les notifs reçues
    socket.on("notifications", (notifications) => {
      setNotifications(notifications);
    });

    socket.on("newNotif", (requestChallenge) => {
      setNotifications([...notifications, requestChallenge]);
      console.log(requestChallenge);
    });
    // equivalent de componentWillUnmount, ma3neha wa9tli l'utilisateur quitte la page, tetsaker el socket.
    return () => {
      socket.close();
    };

    /* eslint-disable */
  }, [socket]);

  const open = useSelector((state) => state.drawer);
  const classes = useStyles();
  return (
    <>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.contentCenter}>
          {notifications.map((notif, i) => (
            <li key={i}>
              <b>{notif._id}</b>
            </li>
          ))}
        </div>
      </main>
    </>
  );
};

export default Tournament;
