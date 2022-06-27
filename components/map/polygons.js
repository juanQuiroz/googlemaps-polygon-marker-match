import { Polygon } from '@react-google-maps/api'
import deliveryZones from '../../core/map/deliveryZones'
import { SHOWPOLYGONS } from '../../utils/utils'

function Polygons() {
  const showpolygons = SHOWPOLYGONS;
  const listZones = deliveryZones.getList();

  const onLoad = polygon => console.log("polygon ready")

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
          visible={showpolygons}
        />
      )
    })}
    </>
  );
}


export default Polygons;
