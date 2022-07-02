import { useState, useContext, useEffect } from 'react';
import { Polygon } from '@react-google-maps/api'
import deliveryZones from '../../core/map/deliveryZones'
import { SHOWPOLYGONS } from '../../utils/utils'


import DeliveryContext from '../../store/deliveryContext';


function Polygons() {
  const google = window.google;

  const showpolygons = SHOWPOLYGONS;
  const [polygonList, setPolygonList] = useState(deliveryZones.getList());

  const [delivery, dispatch] = useContext(DeliveryContext)


  useEffect(() => {
    //google.setMap(null);
    deliveryZones.setSucursal(delivery.sucursalId);
    setPolygonList(deliveryZones.getList())
  },[delivery.sucursalId])


  const onLoad = () => console.log("Polygon ready")

  return (
    <>
    {polygonList.map((polygon, index) => {
      return(
        // eslint-disable-next-line react/jsx-key
        <Polygon
          //key={polygon.getZone()}
          key={index}
          onLoad={onLoad}
          paths={polygon.getPath()}
          options={polygon.getOptions()}
          visible={showpolygons}
        />
      )
    })}
    </>
  );
}


export default Polygons;
