import { useReducer } from "react";
import Layout from "../components/layout/layout";
import Mapper from '../components/map/mapper'
import DeliveryContext from "../store/deliveryContext";
import deliveryReducer from '../store/deliveryReducer'
import DeliveryData from "../store/deliveryData";

function Home() {
  const store = useReducer(deliveryReducer, DeliveryData );
  const [delivery, dispatch] = store;
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
