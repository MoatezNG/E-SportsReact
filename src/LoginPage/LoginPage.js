// import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../_actions";
import React, { useState, useEffect } from "react";
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
export const LoginPage = () => {
  const loggingIn = useSelector(state => state.authentication);
  console.log(loggingIn);
  const dispatch = useDispatch();

  const [submitted, setSubmitted] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(3),
        width: '65ch',
      },
     
    },
    button: {
      display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      },
    },
   
  }));
  const classes = useStyles();
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    if (username && password) {
      dispatch(userActions.login(username, password));
    }
  };

  useEffect(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  return (
    <div className="col-md-6 col-md-offset-3">
      
      <form className={classes.root} name="form" onSubmit={handleSubmit}>
      <h2>Login</h2>  
      <div
          className={
            "form-group" + (submitted && !username ? " has-error" : "")
          }
        >
         
          <TextField
          id="outlined-full-width"
          label="Email/Username"
          htmlFor="Email/Username"
          style={{ margin: 8 }}
          placeholder="Upload Here"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
            type="text"
            className="form-control"
            name="username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          {submitted && !username && (
            <div className="help-block">Username is required</div>
          )}
        </div>
        <div
          className={
            "form-group" + (submitted && !password ? " has-error" : "")
          }
        >
          <TextField
          id="outlined-full-width"
          label="Email/Username"
          htmlFor="Email/Username"
          style={{ margin: 8 }}
          placeholder="Upload Here"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {submitted && !password && (
            <div className="help-block">Password is required</div>
          )}
        </div>
        <div className="form-group">
        <Button onClick={handleSubmit} variant="contained"  type='submit' color="primary">
        <ExitToAppIcon></ExitToAppIcon>
              Login
              </Button> 
              {loggingIn && (
            <img
              alt=""
              src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
            />
          )}
        </div>
       
      </form>
    </div>
  );
};
