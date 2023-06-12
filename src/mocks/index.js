const mockBreweries = require('./mockBreweries.js');
const mockGeoCode = require('./mockGeoCode.js');
const mockGeoJson = require('./mockGeoJson.js');
const wrapMockResponse = require('./util.js');

module.exports = () => {
  const data = {
    breweries: mockBreweries,
    zip: wrapMockResponse('62269'),
    geocode: mockGeoCode,
    geojson: mockGeoJson,
  };
  return data;
};
