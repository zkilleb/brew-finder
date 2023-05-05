import axios from 'axios';

export async function getGeoCode(zip: string) {
  return await axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?address=${zip}&key=${
        import.meta.env.VITE_GOOGLE_MAPS_API_KEY
      }`,
    )
    .then((r) => {
      return r.data.results[0];
    });
}
