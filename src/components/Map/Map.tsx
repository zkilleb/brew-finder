import React from 'react';
import './Map.css';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import { getGeoCode } from '../../api/google';
import { CircularProgress } from '@mui/material';
import { getGeoJson } from '../../api/google/getGeoJson';
import { IGeoJSON, ILatLng } from '../../interfaces/IGeoJson';
import { MapSidePanel } from '..';

export function Map({ zip, product }: { zip?: string; product?: string }) {
  const ref = React.useRef(null);
  const [latitude, setLatitude] = React.useState(0);
  const [longitude, setLongitude] = React.useState(0);
  const [locations, setLocations] = React.useState<IGeoJSON[]>();
  const [map, setMap] = React.useState<google.maps.Map | null>(null);
  const prevMarkersRef = React.useRef<google.maps.Marker[]>([]);

  React.useEffect(() => {
    if (zip) {
      getGeoCode(zip).then((response) => {
        setLatitude(response.geometry.location.lat);
        setLongitude(response.geometry.location.lng);
        if (map && ref.current) {
          setMap(
            new google.maps.Map(ref.current, {
              zoomControl: true,
              mapTypeControl: false,
              streetViewControl: false,
              center: {
                lat: response.geometry.location.lat,
                lng: response.geometry.location.lng,
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
        return <Map />;
    }
  };

  const renderMarkers = (product: string) => {
    clearMarkers(prevMarkersRef.current);
    getGeoJson(product).then((results) => {
      setLocations(results);
      results.forEach((result: IGeoJSON) => {
        const marker = createMarker(result.position, result.title, map);
        createInfoWindow(marker, result);
        prevMarkersRef.current.push(marker);
      });
    });
  };

  const handleSidebarClick = (location: IGeoJSON) => {
    map?.panTo(location.position);
  };

  const createInfoWindow = (marker: google.maps.Marker, result: IGeoJSON) => {
    marker.addListener('click', () => {
      map?.panTo(result.position);
      const infoWindow = new google.maps.InfoWindow({
        content: `<div>${result.title}</div><div>${result.address}</div>`,
      });
      infoWindow.open({
        anchor: marker,
        map,
      });
    });
  };

  const createMarker = (
    position: ILatLng,
    title: string,
    map: google.maps.Map | null,
  ) => {
    return new window.google.maps.Marker({
      position,
      map,
      title,
    });
  };

  const clearMarkers = (markers: any) => {
    for (let m of markers) {
      m.setMap(null);
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
