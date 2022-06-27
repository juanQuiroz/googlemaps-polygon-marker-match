export class Base{
  constructor(sucursal){
    this.zone = sucursal.zone;
    this.price = sucursal.prince;
    this.paths = sucursal.paths;
    this.options = sucursal.options;
    this.googleMapPolygon = null;
  }

  get zone(){
    return this.zone;
  }

  get price(){
    return this.price;
  }

  get paths(){
    return this.paths;
  }

  get options(){
    return this.options;
  }

}
