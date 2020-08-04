import React from "react";

const ProfilesCard = (props) => {
    return (
        <ul>
            <li>{props.profile.username}</li>
        </ul>
    )
}

export default ProfilesCard