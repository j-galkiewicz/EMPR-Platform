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
  height: 'inherit',
}

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
       <div className="geo-box1">
        <GoogleMap className="geo-box"
            id="map"
            zoom={6}
            center={center}
            options={options}
            mapContainerStyle={mapContainerStyle}
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
       </div>
    
        <div className="geo-box2">
          <p className="geoDetails">Organization details:</p>
            <span className="geoDetails--more"> 
              <p>Name</p>
            </span>
            <br></br>
          <label className="geoDetails">Choose date (calendar)</label>
          <input type="date" id="appointment" name="appointment" />
          <Button className="btnGeo" name="Make an appointment" link="/"></Button> 
        </div>

     </div>
    </div>
   
  )
}

export default Geolocation