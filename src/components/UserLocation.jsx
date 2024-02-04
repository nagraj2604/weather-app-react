import React from "react";

const UserLocation = ({ data }) => {
  const { latitude, longitude } = data;

  return (
    <div className="location">
      <h3>Location</h3>
      <p>Latitude : {latitude}</p>
      <p>longitude : {longitude}</p>
    </div>
  );
};

export default UserLocation;
