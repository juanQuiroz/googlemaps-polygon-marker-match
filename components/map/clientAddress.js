import { useState, useEffect } from 'react'

function ClientAddress(){
  const [address, setAddress] = useState('');
  const google = window.google;
  const geocoder = new google.maps.Geocoder();

  return (
    <>
    <p> Dirección: { address } </p>
    </>
  )
}

export default ClientAddress;
