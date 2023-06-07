const wrapMockResponse = require('./util');

const mockGeoCode = wrapMockResponse({
  lat: 38.5900004,
  lng: -89.9066314,
});

module.exports = mockGeoCode;
