import React, { useState } from 'react'
import MapLayout from './map-layout'
import GMap from './gmap'
import SearchBox from './searchBox';
import Price from './price'

function Mapper() {
  const [marker, setMarker] = useState(null);

  return(
    <>
      <MapLayout>
        <SearchBox setMarker={setMarker}></SearchBox>
        <GMap marker={marker}></GMap>
        <Price marker={marker}/>
      </MapLayout>

    </>
  )
}

export default Mapper;
