import React, { useState } from 'react';
import { Autocomplete } from '@react-google-maps/api';

function SearchBox({setMarker}) {
  const [autocomplete, setAutocomplete] = useState(null);
  const [place, setPlace] = useState();
  const onLoad = (autoC) => setAutocomplete(autoC);

  const onPlaceChanged = () => {

    setPlace({
      address: autocomplete.getPlace().formatted_address,
      lat: autocomplete.getPlace().geometry.location.lat(),
      lng: autocomplete.getPlace().geometry.location.lng(),
    });
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    // setCoordinates({ lat, lng });
    setMarker({
      lat: lat,
      lng: lng
    })
  };

  return (
    <div className="flex flex-col justify-center items-center m-4">
      <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
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
