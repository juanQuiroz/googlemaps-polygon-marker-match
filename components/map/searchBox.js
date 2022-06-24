import React, { useState, useContext } from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { updateMarkerBySearchBox } from '../../store/deliveryActions';
import DeliveryContext from '../../store/deliveryContext';

function SearchBox() {
  const [autocomplete, setAutocomplete] = useState(null);
  const onLoad = (autoC) => setAutocomplete(autoC);
  const [delivery, dispatch] = useContext(DeliveryContext);

  const onPlaceChanged = () => {

    const currentMarker = {
      //address: autocomplete.getPlace().formatted_address,
      lat: autocomplete.getPlace().geometry.location.lat(),
      lng: autocomplete.getPlace().geometry.location.lng(),
    };
    dispatch(updateMarkerBySearchBox(currentMarker));
  };

  return (
    <div className="flex flex-col justify-center items-center m-4">
      <Autocomplete
        onLoad={onLoad}
        onPlaceChanged={onPlaceChanged}
      >
        <div width={"35vw"} shadow="lg">
          <div
            pointerEvents={"none"}
            // eslint-disable-next-line react/no-children-prop
            children={<div color="gray" fontSize={20} />}
          />

          <input
            type={"text"}
            placeholder="Search Google Map..."
            variant={"filled"}
            fontSize={18}
            bg={"white"}
            color={"gray.700"}
            _hover={{ bg: "whiteAlpha.800" }}
            _focus={{ bg: "whiteAlpha.800" }}
            _placeholder={{ color: "gray.700" }}
          />
        </div>
      </Autocomplete>
    </div>
  );
}

export default SearchBox;
