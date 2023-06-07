const wrapMockResponse = require('./util');

const mockBreweries = wrapMockResponse([
  { formattedName: '4 Hands Brewing Co.', name: 'four_hands' },
  { formattedName: '2nd Shift Brewery', name: 'second_shift' },
  { formattedName: 'Perennial Artisan Ales', name: 'perennial' },
  { formattedName: 'Wellspent Brewing Company', name: 'wellspent' },
  { formattedName: 'Civil Life Brewing Co.', name: 'civil_life' },
  { formattedName: 'Urban Chestnut Brewing Company', name: 'urban_chestnut' },
  { formattedName: 'Schlafly Beer', name: 'schlafly' },
  { formattedName: 'Bluewood Brewing', name: 'bluewood' },
  { formattedName: '3 Floyds Brewing', name: 'three_floyds' },
]);

module.exports = mockBreweries;
