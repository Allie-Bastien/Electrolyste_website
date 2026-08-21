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

const Maps = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const mapRef = useRef(null);
  const markersRef = useRef([]);

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
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
    if (!isLoaded || !mapRef.current) return;

    const AdvancedMarkerElement =
      window.google.maps.marker.AdvancedMarkerElement;

    if (!AdvancedMarkerElement) {
      console.error(
        'AdvancedMarkerElement could not be loaded. Make sure the marker library is enabled.'
      );
      return;
    }

    // Remove old markers
    markersRef.current.forEach((marker) => {
      marker.map = null;
    });

    markersRef.current = [];

    // Create new Advanced Markers
    markers.forEach((markerData) => {
      const markerElement = document.createElement('div');

      markerElement.style.width = '32px';
      markerElement.style.height = '32px';
      markerElement.style.backgroundColor = '#268249';
      markerElement.style.border = '3px solid white';
      markerElement.style.borderRadius = '50%';
      markerElement.style.boxShadow = '0 2px 6px rgba(0,0,0,0.3)';
      markerElement.style.cursor = 'pointer';

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
        <p>Google Maps failed to load.</p>
        <p>Check your API key and Google Cloud configuration.</p>
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

export default Maps;