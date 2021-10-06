import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const MapComponent = (props) => {
    console.log(props)
  return <Map google={props.google} zoom={20} center={{
      lat: props.lat || 0,
      lng: props.lng || 0
  }} style={props.style} className={props.className}>
      <Marker
        center={
            {
                lat: props.lat || 0,
                lng: props.lng || 0
            }
        }
      ></Marker>
  </Map>;
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyCWDhGlOe4naqQXNM5JdVyZiLk6pAOCjfw",
})(MapComponent);
