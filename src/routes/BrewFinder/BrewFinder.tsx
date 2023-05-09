import { useSearchParams } from 'react-router-dom';
import { MapWrapper } from '../../components';

export function BrewFinder() {
  const [searchParam] = useSearchParams();

  return (
    <div>
      <MapWrapper brewery={searchParam.get('brewery')} />
    </div>
  );
}
