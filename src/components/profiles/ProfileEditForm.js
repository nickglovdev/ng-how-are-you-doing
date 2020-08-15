import React, { useState, useEffect } from "react"
import ProfileManager from "../../modules/ProfileManager";
import "./Profile.css"

const ProfileEditForm = (props) => {
    const [profile, setProfile] = useState({username: "", password: "", email: "", twitter: "",  facebook: "", linkedin: ""})
    const [isLoading, setIsLoading] = useState(false);

    const fieldChange = evt => {
        const stateToChange = { ...profile };
        stateToChange[evt.target.id] = evt.target.value;
        setProfile(stateToChange);
    };

    const updateExistingProfile = evt => {
        evt.preventDefault()
        setIsLoading(true);

        const editedProfile = {
            id: props.match.params.profileId,
            username: profile.username,
            password: profile.password,
            email: profile.email,
            twitter: profile.twitter,
            facebook: profile.facebook,
            linkedin: profile.linkedin
        }
        ProfileManager.update(editedProfile)
            .then(() => props.history.push("/profiles"))
    }
    useEffect(() => {
        ProfileManager.get(props.match.params.profileId)
          .then(profile => {
            setProfile(profile);
            setIsLoading(false);
          });
      }, []);

      return (
        <>
            <form className="profileEditSection">
                <fieldset>
                    <div className="formgrid">
                    <label htmlFor="email">Email:</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={fieldChange}
                            id="email"
                            value={profile.email}
                        />
                        <label htmlFor="twitter">Twitter:</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={fieldChange}
                            id="twitter"
                            value={profile.twitter}
                        />
                        <label htmlFor="facebook">Linkedin:</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={fieldChange}
                            id="facebook"
                            value={profile.facebook}
                        />
                        <label htmlFor="facebook">Facebook:</label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={fieldChange}
                            id="linkedin"
                            value={profile.linkedin}
                        />
                    </div>
                    <div className="alignRight">
                        <button className="registerButton"
                            type="button" disabled={isLoading}
                            onClick={updateExistingProfile}
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}

export default ProfileEditForm