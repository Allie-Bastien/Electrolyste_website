'use client';

import dynamic from 'next/dynamic';

const MapsClient = dynamic(
  () => import('./MapsClient'),
  {
    ssr: false,
    loading: () => <p>Loading map...</p>,
  }
);

export default function Maps() {
  return <MapsClient />;
}