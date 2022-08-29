import MapLayout from '../layout/googleMapLayout';
import GoogleMapBox from './googleMapBox';
import SearchBox from './searchBox';
import DeliveryPrice from './deliveryPrice';
import ClientAddress from './clientAddress';
import DetectUserLocation from './detectUserLocation'

function Mapper() {

  return(
    <>
      <MapLayout>
        <SearchBox />
        <DetectUserLocation />
        <GoogleMapBox />
        <DeliveryPrice />
        {/*<ClientAddress />*/}
      </MapLayout>
    </>
  )
}

export default Mapper;
