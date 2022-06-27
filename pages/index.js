import { useReducer, useEffect } from 'react';
import Layout from '../components/layout/layout';
import Mapper from '../components/map/mapper'
import DeliveryContext from '../store/deliveryContext';
import deliveryReducer from '../store/deliveryReducer'
import DeliveryData from '../store/deliveryData';
import deliveryZones from '../core/map/deliveryZones'
import SUCURSALES from '../api/sucursales'

const sucursalId = 1; //INPUT DATA

function Home() {
  DeliveryData['sucursalId'] = SUCURSALES[sucursalId - 1].id;
  const store = useReducer(deliveryReducer, DeliveryData );
  const [delivery, dispatch] = store;

  //alert("sucursal id:", SUCURSALES[sucursalId - 1].id)

  useEffect(()=>{
    deliveryZones.setSucursal(DeliveryData.sucursalId)
  },[])

  console.log("el precio:",  delivery.price)
  return(
    <Layout>
      <main>
        <DeliveryContext.Provider value={store}>
          <Mapper></Mapper>
        </DeliveryContext.Provider>
      </main>
    </Layout>
  )

}

export default Home;
