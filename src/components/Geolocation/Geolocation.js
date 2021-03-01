import React from "react";
import {
  GoogleMap,
  useLoadScript,
} from "@react-google-maps/api";

const mapContainerStyle = {
  height: "70vh",
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
  googleMapsApiKey: 'AIzaSyDMEeH8Zj-faoNBnCihSXhb66fhfFTf3Wc',
  libraries,
});

if (loadError) return "Error";
if (!isLoaded) return "Loading...";

  return (
    <div>
        <h2>Geolokalizacja</h2>
        <GoogleMap
          id="map"
          mapContainerStyle={mapContainerStyle}
          zoom={8}
          center={center}
      ></GoogleMap>
    </div>
  )
}

export default Geolocation;