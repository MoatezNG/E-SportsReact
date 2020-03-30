import React from 'react'
import { useSelector } from "react-redux";

export const ProfilePage = () => {
    const user = useSelector(state => state.authentication.user.user)
    console.log("the user is: ", user)
    return (
        <div className="col-md-6 col-md-offset-3">
            <div>
                <h2>User Name: </h2>
                {
                    user.name
                }
            </div>
            <div>
                <h2>Email: </h2>
                {
                    user.email
                }
            </div>
            <div>
                <h2>Summoner Name: </h2>
                {
                    user.sumonnerName
                }
            </div>
        </div>
    )
}