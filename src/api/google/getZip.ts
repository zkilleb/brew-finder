import axios from 'axios';

export async function getZip(lat: number, lng: number) {
  return await axios
    .get(`${import.meta.env.VITE_API_PATH}/zip?lat=${lat}&lng=${lng}`)
    .then((r) => {
      return r.data.body.data;
    });
}
