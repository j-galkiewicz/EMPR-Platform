import React, { useState } from "react";
import Button from "../Buttons/Button";
import {
  GoogleMap,
  useLoadScript,
  Marker
} from "@react-google-maps/api";
import mapStyle from './mapStyle'
import locationsDB from './locationsDB'

const mapContainerStyle = {
  height: "60vh",
  width: "50vw",
};
const center = {
  lat: 50.110924,
  lng: 8.682127
};
const libraries = ["places"];
const options = {
  styles: mapStyle,
  disableDefaultUI: true,
  zoomControl: true,
}

const Geolocation = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyA0sEe-MGOXzeLRIkrWYTEP6nvQlQEuvEQ',
    libraries,
  });
  const [markers, setMarkers] = useState(locationsDB)

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
        <h2 className="myGiving-title">My Giving</h2>
        <div className="geowrapper">
        <GoogleMap className="geo-box"
          id="map"
          mapContainerStyle={mapContainerStyle}
          zoom={8}
          center={center}
          options={options}
      >
        {markers.map((marker, id) => (
          <Marker
            key={id}
            position={{
              lat: marker.lat,
              lng: marker.lng
            }}
          />
        ))}
      </GoogleMap>
      
        <div className="geo-box1">
          <p className="geoDetails">Organization details:</p>
          <label className="geoDetails">Choose date (calendar)</label>
          <input type="date" id="appointment" name="appointment" />
          <Button className="btnGeo" name="Make an appointment" link="/"></Button> 
        </div>

     </div>
    </div>
   
  )
}

export default Geolocation