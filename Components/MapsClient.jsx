'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
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
  lng: -73.9030592,
};

const MapsClient = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const mapRef = useRef(null);
  const markersRef = useRef([]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
    libraries: ['marker'],
  });

  const markers = useMemo(
    () => [
      {
        lat: 45.5368223,
        lng: -73.9030592,
        name: 'Clinique Clarea',
      },
    ],
    []
  );

  const handleMapLoad = (map) => {
    mapRef.current = map;
  };

  useEffect(() => {
    if (!isLoaded || !mapRef.current) {
      return;
    }

    if (
      !window.google ||
      !window.google.maps ||
      !window.google.maps.marker
    ) {
      console.error('Google Advanced Marker library was not loaded.');
      return;
    }

    const AdvancedMarkerElement =
      window.google.maps.marker.AdvancedMarkerElement;

    // Remove existing markers
    markersRef.current.forEach((marker) => {
      marker.map = null;
    });

    markersRef.current = [];

    markers.forEach((markerData) => {
      const markerElement = document.createElement('div');

      markerElement.innerHTML = `
        <div
          style="
            width: 32px;
            height: 32px;
            background: #268249;
            border: 3px solid white;
            border-radius: 50%;
            box-shadow: 0 2px 6px rgba(0,0,0,0.3);
            cursor: pointer;
          "
        ></div>
      `;

      markerElement.addEventListener('click', () => {
        setSelectedPlace(markerData);
      });

      const marker = new AdvancedMarkerElement({
        map: mapRef.current,
        position: {
          lat: markerData.lat,
          lng: markerData.lng,
        },
        title: markerData.name,
        content: markerElement,
      });

      markersRef.current.push(marker);
    });

    return () => {
      markersRef.current.forEach((marker) => {
        marker.map = null;
      });

      markersRef.current = [];
    };
  }, [isLoaded, markers]);

  if (loadError) {
    return (
      <div>
        Google Maps failed to load.
      </div>
    );
  }

  if (!isLoaded) {
    return <div>Loading Maps...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={defaultCenter}
      zoom={12}
      onLoad={handleMapLoad}
      options={{
        mapId: process.env.NEXT_PUBLIC_GOOGLE_MAP_ID,
      }}
    >
      {selectedPlace && (
        <InfoWindowF
          position={{
            lat: selectedPlace.lat,
            lng: selectedPlace.lng,
          }}
          onCloseClick={() => setSelectedPlace(null)}
        >
          <div style={{ padding: '5px' }}>
            <h2>{selectedPlace.name}</h2>
            <p>More information here.</p>
          </div>
        </InfoWindowF>
      )}
    </GoogleMap>
  );
};

export default MapsClient;