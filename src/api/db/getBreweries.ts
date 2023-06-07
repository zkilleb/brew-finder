import axios from 'axios';
import { IBrewery } from '../../interfaces/IBreweries';

export async function getBreweries() {
  const result: IBrewery[] = await axios
    .get(`${import.meta.env.VITE_API_PATH}/breweries`)
    .then((r) => {
      return r.data.body.data;
    });
  return result.sort((a, b) => a.name.localeCompare(b.name));
}
