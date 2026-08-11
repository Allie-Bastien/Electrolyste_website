'use client';

import React, { useState, useMemo } from 'react';
import { GoogleMap, MarkerF, InfoWindowF, useLoadScript } from '@react-google-maps/api';


const containerStyle = {
  width: '100%',
  height: '400px'
};

const defaultCenter = {
  lat: -3.745,
  lng: -38.523
};

const Maps = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, // Use environment variables for security
  });

  const [selectedPlace, setSelectedPlace] = useState(null);

  const markers = useMemo(() => [
    { lat: 45.5368223, lng: -73.9030592, name: 'Clinique Clarea' },
  ], []);

  const handleMarkerClick = (marker) => {
    setSelectedPlace(marker);
  };

  const handleInfoWindowClose = () => {
    setSelectedPlace(null);
  };

  if (!isLoaded) return <div>Loading Maps...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={defaultCenter}
      zoom={10}
    >
      {markers.map((marker) => (
        <MarkerF
          key={marker.name}
          position={{ lat: marker.lat, lng: marker.lng }}
          onClick={() => handleMarkerClick(marker)}
        />
      ))}

      {selectedPlace && (
        <InfoWindowF
          position={{ lat: selectedPlace.lat, lng: selectedPlace.lng }}
          onCloseClick={handleInfoWindowClose}
        >
          <div>
            <h2>{selectedPlace.name}</h2>
            <p>More information here.</p>
          </div>
        </InfoWindowF>
      )}
    </GoogleMap>
  );
};

export default Maps;