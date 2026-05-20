import { useEffect } from 'react';
import { load } from '@2gis/mapgl';
import { useMapglContext } from './MapglContext';
import { useControlRotateClockwise } from './useControlRotateClockwise';
import { MapWrapper } from './MapWrapper';

// Координаты Вологды [Долгота, Широта]
export const MAP_CENTER = [39.8861, 59.2205];

export default function Mapgl() {
  const { setMapglContext } = useMapglContext();

  useEffect(() => {
    let map: mapgl.Map | undefined = undefined;

    load().then((mapgl) => {
      // Инициализация чистой карты
      map = new mapgl.Map('map-container', {
        center: MAP_CENTER,
        zoom: 12,
        key: '48a29c05-2126-44e6-b5b2-a9377642b09b',
        style: 'f6706583-8b7b-4e81-b1dd-32ab484ec2a5',
      });

      setMapglContext({
        mapglInstance: map,
        mapgl,
          });
        });

    return () => {
      map && map.destroy();
      setMapglContext({ mapglInstance: undefined, mapgl: undefined });
    };
  }, [setMapglContext]);

  useControlRotateClockwise();

  return (
    <>
      <MapWrapper />
    </>
  );
}