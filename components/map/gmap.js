import React, { useState, memo, useCallback } from 'react';
import { GoogleMap, Marker , useLoadScript} from '@react-google-maps/api';
import MapStyle from '../../styles/map.module.css'
import Polygons from './polygons';

function GMap({marker}) {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyB2ybAvqgwxGxMRam0arL-W6Ea4g_IYF2I" // ,
    // ...otherOptions
  })

  const center = {
    lat:-13.07823,
    lng:-76.38772
  }

  const renderMap = () => {
    // wrapping to a function is useful in case you want to access `window.google`
    // to eg. setup options or create latLng object, it won't be available otherwise
    // feel free to render directly if you don't need that
    return <GoogleMap
      id="maap"
      mapContainerClassName={MapStyle.box}
      center={ marker ?  marker:center }
      zoom={13}
    >
      <Polygons />
      { marker ? (
        <Marker
          label={"hola"}
          position={marker}
        />
      ): <></>}
    </GoogleMap>
  }

  if (loadError) {
    console.log("error")
    return <div>Map cannot be loaded right now, sorry.</div>
  }

  return isLoaded ? renderMap() : <></>


  /*return (
      <>
        <GoogleMap
          mapContainerClassName={MapStyle.box}
          center={ marker ? marker:center}
          zoom={15}
          //onLoad={onLoad}
          //onUnmount={onUnmount}
        >
          <Polygons />
          { marker ? (
            <Marker
              label={"hola"}
              position={marker}
            />
          ): <></>}
        </GoogleMap>
      </>
  )*/

}

export default memo(GMap);
