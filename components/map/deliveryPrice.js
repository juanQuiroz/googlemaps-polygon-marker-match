import { useContext, useEffect } from 'react';
import deliveryZones from '../../core/map/deliveryZones';
import DeliveryContext from '../../store/deliveryContext';
import { updateDeliveryPrice } from '../../store/deliveryActions';


function ClientLocation(location){
  return(
    <>
      <h1>hola mundo</h1>
    </>
  )
}

function DeliveryPrice(){
  const [delivery, dispatch] = useContext(DeliveryContext);
  const zones = deliveryZones.getList();

  generateGooglePolygonForZones(zones);

  useEffect(()=>{
    const currentPrice = calculatePrice(zones, delivery.userMarker);

    dispatch(updateDeliveryPrice(currentPrice));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delivery.userMarker])


  return(
    <>
      <p>
        {
         delivery.price !== null ? "Price:"+(delivery.price) : "Lo sentimos, no hay delivery para esta zona."
        }
      </p>
      <p>
        {
         delivery.userMarker.lat !== -13.07823  ? "Location: " + JSON.stringify(delivery.userMarker)
                                                                                  .replace("{\"lat\":", "")
                                                                                  .replace("\"lng\":", "")
                                                                                  .replace("}", "") : ""
        }
      </p>
    </>
  )
}

function generateGooglePolygonForZones(zones){
  const google = window.google;
  zones.map((zone) => {
    zone.setGooglePolygon( new google.maps.Polygon({paths: zone.getPath()}));
  })
}

function calculatePrice(zones, marke){
  const google = window.google;

  for( let i = 0; i < zones.length; i++ ){
    const resultPath = google.maps.geometry.poly.containsLocation(
      marke,
      zones[i].getGooglePolygon()
    )

    if(resultPath){
      return zones[i].getPrice()
    }
  }

  return null;
}




export default DeliveryPrice;
