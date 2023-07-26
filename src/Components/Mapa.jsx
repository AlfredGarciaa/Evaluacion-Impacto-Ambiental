import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import '../Styles/Mapa.css';

const Mapa = () => {
  const cochabambaCoords = [-17.3935, -66.1571];
  const [currentLocation, setCurrentLocation] = useState(null);

  const handleGetLocationClick = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentLocation([latitude, longitude]);
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
        Ubicacion
      </h1>
      <div style={{ height: '200px', width: '500px' }}>
        <MapContainer center={cochabambaCoords} zoom={13} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {currentLocation && (
            <Marker position={currentLocation}>
              <Popup>
                Tu ubicación actual
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
      <button onClick={handleGetLocationClick}>Obtener mi ubicación</button>
    </div>
  );
};

export default Mapa;
