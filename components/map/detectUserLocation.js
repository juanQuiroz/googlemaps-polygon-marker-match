import React, { useContext, useState } from 'react';
import DeliveryContext from '../../store/deliveryContext';
import { updateUserMarker, updateCenterMap } from '../../store/deliveryActions'

function DetectUserLocation(){
  const [delivery, dispatch] = useContext(DeliveryContext);

  function detectLocation(){
    navigator.geolocation.getCurrentPosition(function(location){
      const marker = {
        lat: location.coords.latitude,
        lng: location.coords.longitude
      };

      dispatch(updateUserMarker(marker));
      dispatch(updateCenterMap(marker));


      console.log("Latitude is: ", location.coords.latitude)
      console.log("Longitude is: ", location.coords.longitude)
    })
  }

  return (
    <>
      <button style={{ background:"skyblue"}}  onClick={detectLocation}>Usar mi ubicación actual</button>
    </>
  )
}

export default DetectUserLocation;
