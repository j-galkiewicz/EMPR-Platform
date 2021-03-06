import React from "react";
import {
  GoogleMap,
  useLoadScript,
} from "@react-google-maps/api";

const mapContainerStyle = {
  height: "60vh",
  width: "50vw",
};
const center = {
  lat: 50.110924,
  lng: 8.682127
};
const libraries = ["places"];

const locationsDB = [
  {
    name: "Frankfurt hosptial",
    lat: 50.110924,
    lng: 8.682127,
    description: "The best place"
  },
  {
    name: "Berlin hosptial",
    lat: 52.110924,
    lng: 12.682127,
    description: "Blood premium"
  },
]

const Geolocation = () => {
const { isLoaded, loadError } = useLoadScript({
  googleMapsApiKey: 'AIzaSyCtjNOuoWYaK2ly0J6G_g8lfhLTZET4F54',
  libraries,
});

if (loadError) return "Error";
if (!isLoaded) return "Loading...";

  return (
    <div>
        <h2>Geolokalizacja</h2>
        <div className="geowrapper">
        <GoogleMap className="geo-box"
          id="map"
          mapContainerStyle={mapContainerStyle}
          zoom={8}
          center={center}
      ></GoogleMap>
      
        <div className="geo-box1">

        </div>

      
     </div>
    </div>
   
  )
}

export default Geolocation;