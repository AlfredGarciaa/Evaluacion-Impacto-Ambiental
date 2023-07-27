import React, { useState, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../Styles/Mapa.css';
import L from 'leaflet'; 
import customIcon from '../Assets/customIcon.png'; 

const Mapa = () => {
  const buenosAiresCoords = [-34.6132, -58.3772];
  const [currentLocation, setCurrentLocation] = useState(null);
  const mapRef = useRef();

  const customMarkerIcon = new L.Icon({
    iconUrl: customIcon,
    iconSize: [60, 60], 
    iconAnchor: [16, 32], 
  });

  const getLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation([latitude, longitude]);
          mapRef.current.setView([latitude, longitude], 13);
        },
        (error) => {
          console.error("Error getting geolocation:", error);
        }
      );
    } else {
      alert("Tu navegador no soporta la geolocalización.");
    }
  };

  return (
    <div className="mapa-container">
      <h1 className="color-text-mapa">
        <i className="fa-solid fa-map"></i>
        Mapa
      </h1>
      <div style={{ height: '200px', width: '500px' }}>
        <MapContainer ref={mapRef} center={currentLocation || buenosAiresCoords} zoom={11} style={{ height: '100%', width: '100%' }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {currentLocation && (
            <Marker position={currentLocation} icon={customMarkerIcon}> 
              <Popup>
                Tu ubicación actual!
              </Popup>
            </Marker>
          )}
          <Marker position={buenosAiresCoords} icon={customMarkerIcon}>
            <Popup>
              Buenos Aires, Argentina!
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <div className="button-container">
        <button onClick={getLocation} className="pulse-button">
          Ubicacion Actual
        </button>
      </div>
    </div>
  );
};

export default Mapa;
