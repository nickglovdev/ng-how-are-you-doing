import React, { useState, useEffect } from "react"
import OwnerManager from "../../modules/ProfileManager"
import ProfileManager from "../../modules/ProfileManager";

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
            .then(() => props.history.push("/emotions"))
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
            <form>
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
                    </div>
                    <div className="alignRight">
                        <button
                            type="button" disabled={isLoading}
                            onClick={updateExistingProfile}
                            className="btn btn-primary"
                        >Submit</button>
                    </div>
                </fieldset>
            </form>
        </>
    );
}

export default ProfileEditForm