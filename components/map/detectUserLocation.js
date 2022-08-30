import React, { useContext, useState } from 'react';
import DeliveryContext from '../../store/deliveryContext';
import { updateUserMarker, updateCenterMap } from '../../store/deliveryActions'

function DetectUserLocation(){
  const [delivery, dispatch] = useContext(DeliveryContext);

  function detectLocation(){
    if(isGPSEnable){
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }

  function success(location){
    console.log("Latitude is: ", location.coords.latitude)
    console.log("Longitude is: ", location.coords.longitude)

    const marker = {
      lat: location.coords.latitude,
      lng: location.coords.longitude
    }

    updateUserLocation(marker)
  }

  function error(error) {
    alert(`ERROR(${error.code}): ${error.message}`);
  };

  function updateUserLocation(marker){
    dispatch(updateUserMarker(marker));
    dispatch(updateCenterMap(marker));
  }

  return (
    <>
      <button style={{ background:"skyblue"}}  onClick={detectLocation}>Usar mi ubicación actual</button>
    </>
  )
}



function isGPSEnable(){
  if("geolocation" in navigator ){
    return true;
  }
  return false
}

export default DetectUserLocation;
