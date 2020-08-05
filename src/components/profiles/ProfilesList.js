import React, { useState, useEffect } from 'react';
import ProfilesCard from "./ProfilesCard"
import ProfileManager from '../../modules/ProfileManager';


const ProfilesList = (props) => {
  const [profiles, setProfiles] = useState([]);

  const getEmotionCard = () => {
    return ProfileManager.getUser().then(profileCard => {
      setProfiles(profileCard)
    });
  };

  useEffect(() => {
    getEmotionCard();
    
  }, []);
  return (
    
    <div>

        {profiles.map(profile => <ProfilesCard
          key={profile.id}
          profile={profile}
          {...props} />)}
         
    </div>
  );
};
export default ProfilesList