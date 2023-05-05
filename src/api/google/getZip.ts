import axios from 'axios';

export async function getZip(lat: number, lng: number) {
  return await axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${
        import.meta.env.VITE_GOOGLE_MAPS_API_KEY
      }`,
    )
    .then((r) => {
      return r.data.results[0];
    });
}
