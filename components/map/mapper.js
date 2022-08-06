import MapLayout from '../layout/googleMapLayout';
import GoogleMapBox from './googleMapBox';
import SearchBox from './searchBox';
import DeliveryPrice from './deliveryPrice';
import ClientAddress from './clientAddress';

function Mapper() {

  return(
    <>
      <MapLayout>
        <SearchBox />
        <GoogleMapBox />
        <DeliveryPrice />
        <ClientAddress />
      </MapLayout>
    </>
  )
}

export default Mapper;
