import React from "react";
import { useState } from "react";

import { Map, Marker } from "@vis.gl/react-google-maps";

const CustomMap = () => {
  // shows marker on Brasov by default
  const [markerLocation, setMarkerLocation] = useState({
    lat: 45.657974,
    lng: 25.601198,
  });

  return (
    <div className="map-container">
      <Map
        style={{ borderRadius: "20px" }}
        defaultZoom={13}
        defaultCenter={markerLocation}
        gestureHandling={"greedy"}
        disableDefaultUI
      >
        <Marker position={markerLocation} />
      </Map>
    </div>
  );
};

export default CustomMap;
