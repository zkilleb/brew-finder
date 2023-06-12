import axios from 'axios';
import { IGeoJSON } from '../../interfaces/IGeoJson';
import { getDistance } from '../google/getDistance';

export async function getGeoJson(
  brewery: string,
  product: string,
  distance: string,
  latitude: number,
  longitude: number,
) {
  let tempArr: IGeoJSON[] = await axios
    .get(
      `${
        import.meta.env.VITE_API_PATH
      }/geojson?brewery=${brewery}&product=${product}`,
    )
    .then((r) => {
      return r.data.body.data;
    });
  console.log(tempArr);
  const strippedLatLng = tempArr.map((location) => {
    return { lat: location.POSITION.lat, lng: location.POSITION.lng };
  });
  const filteredDistanceResult = await getDistance(
    strippedLatLng as any,
    latitude,
    longitude,
  );
  if (distance !== 'Any Distance') {
    return tempArr.filter((location, index) => {
      return (
        parseInt(
          filteredDistanceResult[index].distance.text.replace(' mi', ''),
        ) <= parseInt(distance)
      );
    });
  } else {
    return tempArr;
  }
}
