import { useReducer, useEffect, useState } from 'react';
import Layout from '../components/layout/layout';
import Mapper from '../components/map/mapper'
import DeliveryContext from '../store/deliveryContext';
import deliveryReducer from '../store/deliveryReducer'
import DeliveryData from '../store/deliveryData';
import deliveryZones from '../core/map/deliveryZones'
import SUCURSALES from '../api/sucursales'
import { updateCenterMap, updateSucursalId, updateUserMarker } from '../store/deliveryActions';

const sucursalId = 1; //INPUT DATA



function Home() {
  //const [sucursalId, setSucursalId] = useState(1)

  useEffect(()=>{
    DeliveryData['sucursalId'] = SUCURSALES[sucursalId - 1].id;
    DeliveryData['userMarker'] = SUCURSALES[sucursalId - 1].latLng;
    DeliveryData['centerMap'] = SUCURSALES[sucursalId - 1].latLng;

    deliveryZones.setSucursal(DeliveryData.sucursalId)
  },[])

  const store = useReducer(deliveryReducer, DeliveryData );
  const [delivery, dispatch] = store;


  function changeSucursal(e){
    let local_sucursal = e.target.value - 1 ;

    dispatch(updateSucursalId(local_sucursal + 1))
    dispatch(updateCenterMap(SUCURSALES[local_sucursal].latLng))
    dispatch(updateUserMarker(SUCURSALES[local_sucursal].latLng))
  }


  return(
    <Layout>
      <main>
        <select name="sucursalId" id="sucursalId" onChange={(e) => changeSucursal(e)}>
          <option value="1">Cañete</option>
          <option value="2">Ica</option>
          <option value="3">Chincha</option>
        </select>
        <DeliveryContext.Provider value={store}>
          <Mapper></Mapper>
        </DeliveryContext.Provider>
      </main>
    </Layout>
  )

}

export default Home;
