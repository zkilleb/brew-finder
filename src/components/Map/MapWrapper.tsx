import './MapWrapper.css';
import React from 'react';
import { Map, ZipCodeField } from '..';
import { getZip } from '../../api/google';

export function MapWrapper({ brewery }: { brewery: URLSearchParams }) {
  const [inputZip, setInputZip] = React.useState<string>();
  const [inputProduct, setInputProduct] = React.useState<string>();

  const onSuccess = (position: GeolocationPosition) => {
    getZip(position.coords.latitude, position.coords.longitude).then(
      (response) => {
        setInputZip(response.address_components[7].short_name);
      },
    );
  };

  const onError = () => {
    setInputZip('63104');
  };

  React.useEffect(() => {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  }, []);

  const handleCallback = (zip: string, product: string) => {
    setInputZip(zip);
    setInputProduct(product);
  };

  return (
    <div className="OuterWrapper">
      <div className="LocationInput">
        <ZipCodeField callback={handleCallback} />
      </div>
      <div className="MapWrapper">
        <Map zip={inputZip} product={inputProduct} />
      </div>
    </div>
  );
}
