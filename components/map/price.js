import deliveryZones from "../../core/map/deliveryZones";

function Price({marker}){
  let price =  0;
  const zones = deliveryZones.getList();

  generateGooglePolygonForZones(zones);
  if( marker )
    price = calculatePrice(zones, marker);


  return(
    <>
      <p>Price: {price}</p>
    </>
  )
}

function generateGooglePolygonForZones(zones){
  const google = window.google;
  zones.map((zone) => {
    zone.setGooglePolygon( new google.maps.Polygon({paths: zone.getPath()}));
  })
}

function calculatePrice(zones, marker){
  const google = window.google;

  for( let i = 0; i < zones.length; i++ ){
    const resultPath = google.maps.geometry.poly.containsLocation(
      marker,
      zones[i].getGooglePolygon()
    )

    if(resultPath){
      alert("si estaa!")
      console.log(zones[i].getZone());
      return zones[i].getPrice()
    }
  }

  alert("No estaaa")
  return 999;
}


export default Price;
