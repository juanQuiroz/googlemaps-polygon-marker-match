import React, { memo, useContext, useEffect } from 'react';
import { GoogleMap, Marker , useJsApiLoader} from '@react-google-maps/api';
import MapStyle from '../../styles/map.module.css'
import Polygons from './polygons';
import DeliveryContext from '../../store/deliveryContext';
import { updateUserMarker } from '../../store/deliveryActions'


function GoogleMapBox() {
  //const [mapRef, setMapRef] = useState(null);
  const [delivery, dispatch] = useContext(DeliveryContext)

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY // ,
    // ...otherOptions
  })

  //onLoad={map => setMapRef(map)}
  const renderMap = () => {
    return (
      <GoogleMap
        mapContainerClassName={MapStyle.box}
        center={delivery.centerMap}
        zoom={15}
        clickableIcons={false}
        onClick={(e) => dispatch(updateUserMarker(e.latLng))}
        options={{
          "gestureHandling": "cooperative"
        }}
      >
        <Polygons />
        <Marker
          position={delivery.userMarker}
          draggable={true}
          onDragEnd={(e) => dispatch(updateUserMarker(e.latLng))}
        />

        <Marker
          position={{ lat:-13.07823, lng:-76.38772 }}
          draggable={false}
          icon={{
            url: "/images/oishi_marker.png",
          }}
        />
        <Marker
          position={{"lat": -13.4176305, "lng": -76.1319676 }}
          draggable={false}
          icon={{
            url: "/images/oishi_marker.png",
          }}
        />
        <Marker
          position={{"lat": -14.0738371, "lng": -75.7276072 }}
          draggable={false}
          icon={{
            url: "/images/oishi_marker.png",
          }}
        />

      </GoogleMap>
    )
  }

  return isLoaded ? renderMap() : <></>
}

export default memo(GoogleMapBox);
