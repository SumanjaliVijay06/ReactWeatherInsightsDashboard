import React, {useState} from 'react'

const UserPreference = ({onLocationChange, onPreferenceChange, onUserGroupChange}) => {

  const [newLocation, setNewLocation] = useState("");
  const [activityPreference, setActivityPreference] = useState("outdoor");
  const [userGroup, setUserGroup] = useState('traveler')

  const handleLocationChange = (event) => {
    event.preventDefault();
    onLocationChange(newLocation);
  }

  const handlePreferenceChange = (event) => {
    setActivityPreference(event.target.value);
    onPreferenceChange({activity: event.target.value});
  }

  const handleLocationInputChange = (event) => {
    onLocationChange(event.target.value);
  };

  const handleUserGroupChange = (event) => {
    setUserGroup(event.target.value)
    onUserGroupChange(event.target.value)
  }



  return (
    <div className='user-settings'>
      <form onSubmit={handleLocationChange}>
          <input 
            type='text'
            placeholder='Enter City'
            value={newLocation}
            onChange={(event) => setNewLocation(event.target.value)}
          />
          <button type='submit' className='button'> Search </button>
      </form>
      <div className='user-preference-container'>
        <div className='activity-container'>
        <label>
          Activity Preference
          <select value={activityPreference} onChange={handlePreferenceChange}>
            <option value="outdoor"> Outdoor </option>
            <option value="indoor"> Indoor </option>
          </select>
        </label>
        </div>
        <div className='activity-container'>
      <label>
        User Preference
      <select value={userGroup} onChange={handleUserGroupChange}>
        <option value='traveler'>Traveler</option>
        <option value='event-planner'>Event Planner</option>
        <option value='farmer'>Farmer</option>
      </select>
      </label>
    </div>
    </div>
    </div>
  )
}

export default UserPreference

