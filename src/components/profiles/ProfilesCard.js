import React from "react";
import "./Profile.css"

const ProfilesCard = (props) => {
    return (
        <div className="profileCard">
            <ul>
                <li>Username: {props.profile.username}</li>
                <li>Email: {props.profile.email}</li>
                <li>Twitter: {props.profile.twitter}</li>
                <li>Facebook: {props.profile.facebook}</li>
                <li>Linkedin: {props.profile.linkedin}</li>
            </ul>
            <div>
                <button type="button"
                    onClick={() => props.history.push(`/profiles/${props.profile.id}/edit`)}>
                    Edit
                </button>
            </div>
        </div>



    )
}

export default ProfilesCard