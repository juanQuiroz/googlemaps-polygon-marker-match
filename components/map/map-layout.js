import React, { Component } from 'react';
import { LoadScript } from '@react-google-maps/api';
import { LIBRARIES } from '../../utils/utils';



function MapLayout({ children }) {
  const librariez = LIBRARIES;

  return (
    <LoadScript
      googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY}
      libraries={librariez}
    >
      { children }
    </LoadScript>
  )
}

export default MapLayout;
