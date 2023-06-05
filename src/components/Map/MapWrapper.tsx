import './MapWrapper.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { Map, ZipCodeField } from '..';
import { getZip } from '../../api';

export function MapWrapper({ brewery }: { brewery: string | null }) {
  const [inputZip, setInputZip] = React.useState<string>();
  const [inputProduct, setInputProduct] = React.useState<string>();
  const [inputDistance, setInputDistance] = React.useState<string>();

  const onSuccess = (position: GeolocationPosition) => {
    getZip(position.coords.latitude, position.coords.longitude).then(
      (response) => {
        setInputZip(response);
      },
    );
  };

  const onError = () => {
    setInputZip('63104');
  };

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  const handleCallback = (zip: string, product: string, distance: string) => {
    setInputZip(zip);
    setInputProduct(product);
    setInputDistance(distance);
  };

  return (
    <div className="OuterWrapper">
      <div className="LocationInput">
        <ZipCodeField callback={handleCallback} />
      </div>
      <div className="MapWrapper">
        {brewery ? (
          <Map
            zip={inputZip}
            product={inputProduct || ''}
            distance={inputDistance || ''}
            brewery={brewery}
          />
        ) : (
          <div>
            Brewery needed to display data.
            <div>
              <Link className="ReturnLink" to="/breweries">
                Click here to select one.
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
