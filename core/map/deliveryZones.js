import PolygonsData from './data.json';

class Zone {
  constructor(poligono){
    this.zone = poligono.zone;
    this.paths = poligono.paths;
    this.price = poligono.price;
    this.options = poligono.options
    this.googleMapPolygon = null;
  }
  getZone(){
    return this.zone;
  }

  getPrice(){
    return this.price;
  }

  getPath(){
    return this.paths;
  }

  getOptions(){
    return this.options;
  }

  setGooglePolygon(googlePolygon){
    this.googleMapPolygon = googlePolygon;
  }

  getGooglePolygon(){
    return this.googleMapPolygon
  }

  isPointIntoPolygon(point){
    const resultPath = google.maps.geometry.poly.containsLocation(
      point,
      this.googleMapPolygon
    )

    if(resultPath){
      return true;
    }

    return false;
  }
}


class DeliveryZones{
  constructor(){
    this.delivery_zones = PolygonsData['zone_deliveries'];
    this.zoneList = [];
    this.build();
  }

  build(){
    this.delivery_zones.map((zone_delivery) => {
      const zone = new Zone(zone_delivery)
      this.zoneList.push(zone)
    })
  }

  getList(){
    return this.zoneList;
  }

  calculatePrice(){

  }

  getPricePerDeliveryZone(point){
    this.zoneList.map((zone) => {
      if(zone.isPointIntoPolygon(point)){
        return zone.getPrice();
      }
      return undefined;
    })
  }
}

const deliveryZones = new DeliveryZones();
export default deliveryZones;


/*function DeliZones (){

  const google = window.google;

  const triangleCoords = [
    { lat: 25.774, lng: -80.19 },
    { lat: 18.466, lng: -66.118 },
    { lat: 32.321, lng: -64.757 },
  ];

  const bermudaTriangle = new google.maps.Polygon({ paths: triangleCoords });

  const resultColor = google.maps.geometry.poly.containsLocation(
    { lat: 39.000, lng: -80.19 },
    bermudaTriangle
  )

  alert("hola mundo")

  if(resultColor){
    alert("si se cuentra");
  } else{
    alert("noooooo");
  }

  return (
    <p>Hi</p>
  )

}
*/
