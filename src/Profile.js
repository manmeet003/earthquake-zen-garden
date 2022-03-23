import React from 'react';
import classes from './Profile.module.css';
const Profile = (props) => {
    return (
        <div className={classes.info}>
            <h3>Profile</h3>
            <table >
                <tbody>
                    <tr>
                        <td rowSpan="5">
                            <img className={classes.avatar} src={props.profiledata.avatarImage} />
                        </td>
                        <td>
                            First Name
                        </td>
                        <td>
                            {props.profiledata.firstName}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Last Name
                        </td>
                        <td>
                            {props.profiledata.lastName}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Phone
                        </td>
                        <td>
                            {props.profiledata.phone}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Email
                        </td>
                        <td>
                            {props.profiledata.email}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Bio
                        </td>
                        <td>
                            {props.profiledata.bio}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Profile;