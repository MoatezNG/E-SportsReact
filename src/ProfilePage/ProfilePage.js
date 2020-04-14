import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from "@material-ui/core/styles";
import { userActions } from "../_actions";

const useStyles = makeStyles(theme => ({
    input: {
        margin: '40px 0'
    }
}));

export const ProfilePage = () => {
    const classes = useStyles();
    const user = useSelector(state => state.authentication.user)
    const dispatch = useDispatch();
    /**
     * Initialising the user data in the state
     */
    const [email, setEmail] = useState(user.email)
    const [name, setName] = useState(user.name)
    const [prename, setPrename] = useState(user.prename)
    const [username, setUsername] = useState(user.username)
    const [sumonnerName, setSumonnerName] = useState(user.sumonnerName)
    const [userImage, setUserImage] = useState(user.userImage)
    const handleSubmit = () => {
        const payload = {
            email,
            name,
            prename,
            username,
            sumonnerName,
            userImage,
        }
        dispatch(userActions.updateUser(payload))
    }
    return (
        <div className="col-md-6 col-md-offset-3">

            <h2>Profile page</h2>

            <div className="col-md-6 col-md-offset-3">

                <div className={classes.input}>
                    <TextField
                        value={username}
                        id="standard-basic"
                        label="Username"
                        onChange={e => setUsername(e.target.value)}
                    />
                </div>
                <div className={classes.input}>
                    <TextField
                        value={name}
                        id="standard-basic"
                        label="first Name"
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className={classes.input}>
                    <TextField
                        value={prename}
                        id="standard-basic"
                        label="Last Name"
                        onChange={e => setPrename(e.target.value)}
                    />
                </div>
                <div className={classes.input}>
                    <TextField
                        value={email}
                        id="standard-basic"
                        label="Email"
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className={classes.input}>
                    <TextField
                        value={sumonnerName}
                        id="standard-basic"
                        label="Summoner Name"
                        onChange={e => setSumonnerName(e.target.value)}
                    />
                </div>
                <div className={classes.input}>
                    <label>Profile picture</label>
                    {
                        userImage && <img src={`localhost:3001/${userImage}`} />
                    }
                    <input onChange={e => setUserImage(e.target.files[0])} type="file" />
                </div>
                <Button onClick={handleSubmit} variant="contained" color="primary" type='submit'>Update</Button>


            </div>
        </div>

    )
}