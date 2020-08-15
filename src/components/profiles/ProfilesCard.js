import React from "react";
import "./Profile.css"

const ProfilesCard = (props) => {
    return (
        <div className="profileCard">
            <ul className="profileList">
                <li><span className="profilesLabel">Username</span>: {props.profile.username}</li>
                <li><span className="profilesLabel">Email</span>: {props.profile.email}</li>
                <li><span className="profilesLabel">Twitter</span>: {props.profile.twitter}</li>
                <li><span className="profilesLabel">Facebook</span>: {props.profile.facebook}</li>
                <li><span className="profilesLabel">Linkedin</span>: {props.profile.linkedin}</li>
            </ul>
            <div>
                <button type="button" className="profileEditButton"
                    onClick={() => props.history.push(`/profiles/${props.profile.id}/edit`)}>
                    Edit
                </button>
            </div>
        </div>



    )
}

export default ProfilesCard