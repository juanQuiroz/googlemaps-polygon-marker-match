import React, { useContext, useState } from 'react';
import DeliveryContext from '../../store/deliveryContext';
import { updateUserMarker, updateCenterMap } from '../../store/deliveryActions'

function DetectUserLocation(){
  const [delivery, dispatch] = useContext(DeliveryContext);

  if("geolocation" in navigator){
    console.log("activo");
  }
  else{
    console.log("desactivado");
  }

  function detectLocation(){
    if(isGPSEnable){
      try{
        navigator.geolocation.getCurrentPosition(function(location){
          console.log("Latitude is: ", location.coords.latitude)
          console.log("Longitude is: ", location.coords.longitude)

          const marker = {
            lat: location.coords.latitude,
            lng: location.coords.longitude
          }

          dispatch(updateUserMarker(marker));
          dispatch(updateCenterMap(marker));
        });
      } catch(erro){
        alert("por favor, necesitamos que active el GPS");
      }
    }
    else {
      console.log("Verifique si su gps esta activado.");
    }
  }


  return (
    <>
      <button style={{ background:"skyblue"}}  onClick={detectLocation}>Usar mi ubicación actual</button>
    </>
  )
}



function isGPSEnable(){
  if("geolocation" in navigator ){
    console.log("enable");
    return true;
  }
  console.log("disable");
  return false
}

export default DetectUserLocation;
