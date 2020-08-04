import React from "react";

const ProfilesCard = (props) => {
    return (
        <>
        <ul>
            <li>Username: {props.profile.username}</li>
            <li>Email: {props.profile.email}</li>
            <li>Twitter: {props.profile.facebook}</li>
            <li>Linkedin: {props.profile.linkedin}</li>
        </ul>
         <button type="button"
         onClick={() => props.history.push(`/profiles/${props.profile.id}/edit`)}>
         Edit
       </button>
       </>


    )
}

export default ProfilesCard