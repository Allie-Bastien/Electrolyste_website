'use client';

import React, { useRef, useState } from 'react';
import {
  GoogleMap,
  InfoWindowF,
  useLoadScript,
} from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px',
};

const defaultCenter = {
  lat: 45.5368223,
  lng: -73.5981886,
};

const MapsClient = () => {
  const markerRef = useRef(null);

  const [selectedPlace, setSelectedPlace] =
    useState(null);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    libraries: ['marker'],
  });

  const handleMapLoad = async (map) => {
    console.log('✅ MAP CREATED');

    try {
      const AdvancedMarkerElement =
        window.google.maps.marker?.AdvancedMarkerElement;

      if (!AdvancedMarkerElement) {
        console.error(
          '❌ AdvancedMarkerElement is NOT available'
        );
        return;
      }

      const markerElement =
        document.createElement('div');

      markerElement.innerHTML = `
        <div style="
          width: 22px;
          height: 22px;
          background-color: #268249;
          border: 3px solid white;
          border-radius: 50%;
          box-shadow: 0 2px 6px rgba(0,0,0,0.4);
          cursor: pointer;
        "></div>
      `;

      markerElement.addEventListener('click', () => {
        setSelectedPlace({
          lat: 45.5368223,
          lng: -73.5981886,
          name: 'Clinique Clarea',
        });
      });

      markerRef.current =
        new AdvancedMarkerElement({
          map,
          position: {
            lat: 45.5368223,
            lng: -73.5981886,
          },
          title: 'Clinique Clarea',
          content: markerElement,
        });

      console.log('✅ CLINIQUE MARKER CREATED');
    } catch (error) {
      console.error(
        '❌ ERROR CREATING MARKER:',
        error
      );
    }
  };

  if (loadError) {
    return (
      <div>
        Google Maps failed to load.
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div>
        Loading Maps...
      </div>
    );
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={defaultCenter}
      zoom={15}
      onLoad={handleMapLoad}
      options={{
        mapId:
          process.env.NEXT_PUBLIC_GOOGLE_MAP_ID,
      }}
    >
      {selectedPlace && (
        <InfoWindowF
          position={{
            lat: selectedPlace.lat,
            lng: selectedPlace.lng,
          }}
          onCloseClick={() =>
            setSelectedPlace(null)
          }
        >
          <div style={{ padding: '5px' }}>
            <h2>{selectedPlace.name}</h2>
            <p>
              1121 Rue de Bellechasse,
              Montréal, QC H2S 1Y5
            </p>
          </div>
        </InfoWindowF>
      )}
    </GoogleMap>
  );
};

export default MapsClient;