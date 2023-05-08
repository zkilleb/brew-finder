import { useSearchParams } from 'react-router-dom';
import { MapWrapper } from '../../components';

export function BrewFinder() {
  const [breweryParam] = useSearchParams();

  return (
    <div>
      <MapWrapper brewery={breweryParam} />
    </div>
  );
}
