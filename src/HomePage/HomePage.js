import React from "react";
import { PrimarySearchAppBar } from "../NavBar/PrimarySearchAppBar";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140,
    width: 100
  },
  control: {
    padding: theme.spacing(2)
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  contentCenter: {
    marginLeft: 200
  }
}));

export const HomePage = () => {
  const open = useSelector(state => state.drawer);

  const classes = useStyles();
  return (
    <div>
      <PrimarySearchAppBar />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.contentCenter}>
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(value => (
                  <Grid key={value} item>
                    <Paper>
                      <img
                        alt=""
                        src="https://theme.zdassets.com/theme_assets/43400/87a1ef48e43b8cf114017e3ad51b801951b20fcf.jpg"
                      />
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </div>
      </main>
    </div>
  );
};

//
// const drawerWidth = 240;
// const useStyles = makeStyles(theme => ({

// class HomePage extends React.Component {
//   componentDidMount() {
//     this.props.dispatch(userActions.getAll());
//   }

//   render() {
//     const { user, users } = this.props;

//     return (
//       <div>
//         <PrimarySearchAppBar></PrimarySearchAppBar>

//         <h1>Hi {user.user.name}!</h1>
//         <p>You're logged in with React & JWT!!</p>
//         <h3>Users from secure api end point:</h3>
//         {users.loading && <em>Loading users...</em>}
//         {users.error && (
//           <span className="text-danger">ERROR: {users.error}</span>
//         )}
//         {users.items && (
//           <ul>
//             <li key={user.user._id}>{user.user.name + " " + user.token}</li>
//           </ul>
//         )}
//         <p>
//           <Link to="/login">Logout</Link>
//         </p>
//       </div>
//     );
//   }
// }

// function mapStateToProps(state) {
//   const { users, authentication } = state;
//   const { user } = authentication;
//   return {
//     user,
//     users
//   };
// }

// const connectedHomePage = connect(mapStateToProps)(HomePage);
// export { connectedHomePage as HomePage };