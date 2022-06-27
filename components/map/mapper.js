import MapLayout from '../layout/googleMapLayout'
import GoogleMapBox from './googleMapBox'
import SearchBox from './searchBox';
import DeliveryPrice from './deliveryPrice';

function Mapper() {

  return(
    <>
      <MapLayout>
        <SearchBox />
        <GoogleMapBox />
        <DeliveryPrice />
      </MapLayout>
    </>
  )
}

export default Mapper;
