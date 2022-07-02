import sucursalesData from "../../api/sucursales";

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
    //this.delivery_zones = PolygonsData['zone_deliveries'];
    //this.delivery_zones = DeliveriesData['zone_deliveries'];
    this.delivery_zones = [];
    this.zoneList = [];
  }

  setSucursal(sucursal){
    this.delivery_zones = [];
    this.delivery_zones = sucursalesData[sucursal - 1].polygons;
    this.build();
  }

  build(){
    this.zoneList = []
    this.delivery_zones.map((zone_delivery) => {
      const zone = new Zone(zone_delivery)
      this.zoneList.push(zone)
    })
  }

  getList(){
    return this.zoneList;
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
