import React from 'react';
import './Map.css';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { getGeoCode, getGeoJson } from '../../api';
import { CircularProgress } from '@mui/material';
import { IGeoJSON, ILatLng } from '../../interfaces/IGeoJson';
import { MapSidePanel } from '..';

export function Map({
  zip,
  product,
  distance,
  brewery,
}: {
  zip?: string;
  product: string;
  distance: string;
  brewery: string;
}) {
  const ref = React.useRef(null);
  const [latitude, setLatitude] = React.useState(0);
  const [longitude, setLongitude] = React.useState(0);
  const [locations, setLocations] = React.useState<IGeoJSON[]>();
  const [map, setMap] = React.useState<google.maps.Map | null>(null);
  const prevMarkersRef = React.useRef<google.maps.Marker[]>([]);
  const prevWindowsRef = React.useRef<google.maps.InfoWindow[]>([]);

  React.useEffect(() => {
    if (zip) {
      getGeoCode(zip).then((response) => {
        setLatitude(response.lat);
        setLongitude(response.lng);
        if (map && ref.current) {
          setMap(
            new google.maps.Map(ref.current, {
              zoomControl: true,
              mapTypeControl: false,
              streetViewControl: false,
              center: {
                lat: response.lat,
                lng: response.lng,
              },
              zoom: 11,
            }),
          );
          if (product) {
            renderMarkers(product);
          }
        }
      });
    }
  }, [zip, product]);

  React.useEffect(() => {
    if (ref.current && !map) {
      setMap(
        new google.maps.Map(ref.current, {
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          clickableIcons: true,
          center: {
            lat: latitude ?? 0,
            lng: longitude ?? 0,
          },
          zoom: 11,
        }),
      );
    }
    if (map && product) {
      renderMarkers(product);
    }
  }, [ref, map, latitude, longitude, product]);

  const render = (status: Status) => {
    switch (status) {
      case Status.LOADING:
        return <CircularProgress />;
      case Status.FAILURE:
        return <div>Error loading map</div>;
      case Status.SUCCESS:
        return (
          <Map
            zip={zip}
            distance={distance}
            brewery={brewery}
            product={product}
          />
        );
    }
  };

  const renderMarkers = (product: string) => {
    clearMarkers(prevMarkersRef.current);
    clearInfoWindows(prevWindowsRef.current);
    getGeoJson(brewery, product, distance, latitude, longitude).then(
      (results) => {
        setLocations(results);
        results.forEach((result: IGeoJSON) => {
          createMarker(result.POSITION, result.TITLE, map).then((marker) => {
            createInfoWindow(marker, result);
            prevMarkersRef.current.push(marker);
          });
        });
      },
    );
  };

  const createMarker = async (
    position: ILatLng,
    title: string,
    map: google.maps.Map | null,
  ) => {
    const marker = new window.google.maps.Marker({
      position,
      map,
      title,
    });
    marker.set('id', `${position.lat} ${position.lng}`);
    return marker;
  };

  const createInfoWindow = (marker: google.maps.Marker, result: IGeoJSON) => {
    const infoWindow = new google.maps.InfoWindow({
      content: `<div>${result.TITLE}</div><div>${result.ADDRESS}</div>`,
      pixelOffset: new google.maps.Size(0, -30),
      position: {
        lat: result.POSITION.lat,
        lng: result.POSITION.lng,
      },
    });
    infoWindow.set('id', `${result.ADDRESS}`);
    prevWindowsRef.current.push(infoWindow);
    marker.addListener('click', () => {
      clearInfoWindows(prevWindowsRef.current);
      map?.panTo(result.POSITION);
      infoWindow.open({
        map,
      });
    });
  };

  const handleSidebarClick = (location: IGeoJSON) => {
    clearInfoWindows(prevWindowsRef.current);
    const result = prevWindowsRef.current.find((window: any) => {
      return window.id === location.ADDRESS;
    });
    result?.open({
      map,
    });
    map?.panTo(location.POSITION);
  };

  const clearMarkers = (markers: any) => {
    for (let m of markers) {
      m.setMap(null);
    }
  };

  const clearInfoWindows = (windows: any) => {
    for (let i of windows) {
      i.setMap(null);
    }
  };

  return (
    <Wrapper
      apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY || ''}
      render={render}
    >
      <MapSidePanel
        locations={locations}
        handleSidebarClick={handleSidebarClick}
      />
      <div
        className="Map"
        ref={ref}
        style={{ height: '800px', width: '800px' }}
      />
    </Wrapper>
  );
}
