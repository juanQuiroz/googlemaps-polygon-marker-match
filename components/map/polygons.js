import React, { useState } from 'react';
import { Polygon } from '@react-google-maps/api'
import deliveryZones from '../../core/map/deliveryZones'

function Polygons() {
  const listZones = deliveryZones.getList();

  const onLoad = polygon => console.log("Polygon Ready.")

  return (
    <>
    {listZones.map((zone) => {
      return(
        // eslint-disable-next-line react/jsx-key
        <Polygon
          key={zone.getZone()}
          onLoad={onLoad}
          paths={zone.getPath()}
          options={zone.getOptions()}
          visible={true}
        />
      )
    })}
    </>
  );
}


export default Polygons;
