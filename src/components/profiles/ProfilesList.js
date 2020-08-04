import React, { useState, useEffect } from 'react';
import ProfilesCard from "./ProfilesCard"
import ProfileManager from '../../modules/ProfileManager';


const ProfilesList = (props) => {
  const [profiles, setProfiles] = useState([]);

  const getEmotionCard = () => {
    return ProfileManager.getAll().then(allProfileCards => {
      setProfiles(allProfileCards)
    });
  };

  useEffect(() => {
    getEmotionCard();
    
  }, []);
  console.log(profiles)
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