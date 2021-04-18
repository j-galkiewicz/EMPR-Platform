import React, { useState } from "react";
import {
  GoogleMap,
  useLoadScript,
  Marker
} from "@react-google-maps/api";
import mapStyle from './mapStyle'
import locationsDB from './locationsDB'
import MapInfo from './MapInfo'
import AppointmentForm from './AppointmentForm'

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
  const [appointmentFormDisplay, setAppointmentFormDisplay] = useState(false)

  if (loadError) return "Error";
  if (!isLoaded) return "Loading...";

  return (
    <div>
      <h2 className="myGiving-title">My Giving</h2>
      <div className="geowrapper">
       <div className="geo-map">
        <GoogleMap className="geo-map"
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
              onClick={() => {
                setAppointmentFormDisplay(true)
              }}
            />
          ))}
        </GoogleMap>
       </div>
    
        <div className="geo-box2 padding-20">
          {appointmentFormDisplay ? <AppointmentForm /> : <MapInfo />}
        </div>

     </div>
    </div>
   
  )
}

export default Geolocation