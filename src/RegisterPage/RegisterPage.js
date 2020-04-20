// import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux";
import { userActions } from "../_actions";
import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
export const RegisterPage = () => {
  const loggingIn = useSelector(state => state.authentication);
  const dispatch = useDispatch();

  const [submitted, setSubmitted] = useState();
  const [name, setName] = useState("");
  const [sumonnerName, setSumonnerName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userImage, setUserImage] = useState();
  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '65ch',
        marginLeft:100

      },
     
    },
    button: {
      display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      marginLeft:100
      },
    },
   
  }));
  const useStyles1 = makeStyles({
    root: {
      minWidth: 275,
    },
   
   
  });
  const classes = useStyles();
  const classes1 = useStyles1();

  const responseGoogle = (response) => {
    console.log(response);
    setName(response.profileObj.name)
    setEmail(response.profileObj.email)
    setUserImage(response.profileObj.imageUrl)
  }
  const responseFacebook = (response) => {
    setName(response.name)
    setEmail(response.email)
    setUserImage(response.picture.data.url)
}
  const handleSubmit = e => {
    e.preventDefault();
    const payload = {
      name,
      sumonnerName,
      email,
      password,
      userImage,
    }
    

    setSubmitted(true);
    if (name && email && sumonnerName && password && userImage) {
      dispatch(userActions.register(payload));
    }
  };

  return (
    <div className="col-md-6 col-md-offset-3" >
     <Card className={classes.root}>
      <CardContent>
        <h2>Register</h2>
      <form  className={classes1.root} name="form" onSubmit={handleSubmit}>
        {/* 
                Profile picture
                 */}
        <div
          className={"form-group" + (submitted && !name ? " has-error" : "")}
        >
          <TextField
          id="outlined-full-width"
          label="Profile Picture"
          htmlFor="password"
          style={{ margin: 8 }}
          placeholder="Upload Here"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
            type="file"
            name="image"
            onChange={e => setUserImage(e.target.files[0])}
          />
          {submitted && !name && (
            <div className="help-block">name is required</div>
          )}
        </div>

        {/* 
                Name
                 */}
        <div
          className={"form-group" + (submitted && !name ? " has-error" : "")}
        >
          
          <TextField
          id="outlined-full-width"
          label="Username"
          htmlFor="username"
          style={{ margin: 8 }}
          placeholder="Username"
          helperText="Required!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
            type="text"
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          {submitted && !name && (
            <div className="help-block">name is required</div>
          )}
        </div>
        {/* 
                Password
                 */}
        <div
          className={
            "form-group" + (submitted && !password ? " has-error" : "")
          }
        >
          <TextField
          id="outlined-full-width"
          label="Password"
          htmlFor="password"
          style={{ margin: 8 }}
          helperText="Required!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
            type="password"
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {submitted && !password && (
            <div className="help-block">Password is required</div>
          )}
        </div>
        {/* 
                Email
                 */}
        <div
          className={"form-group" + (submitted && !email ? " has-error" : "")}
        >
         
          <TextField
          id="outlined-full-width"
          label="Email"
          htmlFor="email"
          style={{ margin: 8 }}
          helperText="Required!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
            type="text"
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          {submitted && !email && (
            <div className="help-block">Email is required</div>
          )}
        </div>
        {/* 
                Summoner name
                 */}
        <div
          className={
            "form-group" + (submitted && !sumonnerName ? " has-error" : "")
          }
        >
          <TextField
          id="outlined-full-width"
          label="Summoner name"
          htmlFor="password"
          style={{ margin: 8 }}
          helperText="Required!"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined" 
            type="text"
            name="sumonnerName"
            value={sumonnerName}
            onChange={e => setSumonnerName(e.target.value)}
          />
          {submitted && !sumonnerName && (
            <div className="help-block">Summoner name is required</div>
          )}
        </div>
        
        <div className={classes.button} >
        <ButtonGroup
        orientation="vertical"
        color="primary"
        aria-label="vertical contained primary button group"
        variant="contained"
      >
        <FacebookLogin 
        appId="871861379919953"
        autoLoad={false}
        fields="name,email,picture"
        style={{ width: "270px" }}
        callback={responseFacebook} />,
          <GoogleLogin 
         clientId="725357484659-o4m00bti1pb61g1vcbg6i557g0ot4kpu.apps.googleusercontent.com"
         buttonText="LOGIN WITH GOOGLE"
         onSuccess={responseGoogle}
         onFailure={responseGoogle}
         style={{ height:"75px" }}         
         cookiePolicy={'single_host_origin'}
  />
  <Button style={{ height:"55px" }} onClick={handleSubmit} variant="contained"  type='submit' color="primary">
        <ExitToAppIcon></ExitToAppIcon>
              Login
              </Button> 
          </ButtonGroup>
           
          </div>
         


      </form>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
     
    </div>
  );
};
