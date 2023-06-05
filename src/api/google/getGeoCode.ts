import axios from 'axios';

export async function getGeoCode(zip: string) {
  return await axios
    .get(`${import.meta.env.VITE_API_PATH}/geocode?zip=${zip}`)
    .then((r) => {
      return r.data.body.data;
    });
}
