import { IBrewery } from '../../interfaces/IBreweries';

export async function getBreweries() {
  return mockData.sort((a, b) => a.value.localeCompare(b.value));
}

const mockData: IBrewery[] = [
  { displayName: '4 Hands Brewing Co.', value: 'four_hands' },
  { displayName: '2nd Shift Brewery', value: 'second_shift' },
  { displayName: 'Perennial Artisan Ales', value: 'perennial' },
  { displayName: 'Wellspent Brewing Company', value: 'wellspent' },
  { displayName: 'Civil Life Brewing Co.', value: 'civil_life' },
  { displayName: 'Urban Chestnut Brewing Company', value: 'urban_chestnut' },
  { displayName: 'Schlafly Beer', value: 'schlafly' },
  { displayName: 'Bluewood Brewing', value: 'bluewood' },
  { displayName: '3 Floyds Brewing', value: 'three_floyds' },
];
