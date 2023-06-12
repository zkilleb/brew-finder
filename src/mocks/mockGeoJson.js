const wrapMockResponse = require('./util');

const mockGeoJson = wrapMockResponse([
  {
    POSITION: { lat: 38.5859807, lng: -89.9875464 },
    TITLE: 'Total Wine',
    ADDRESS:
      '5905 North Illinois Street Lincoln Place Shopping Center, Fairview Heights, IL 62208',
  },
  {
    POSITION: { lat: 38.7735011, lng: -90.7017746 },
    TITLE: 'Dogwood Wine and Spirits',
    ADDRESS: "2601 State Hwy K A, O'Fallon, MO 63368",
  },
  {
    POSITION: { lat: 38.5731181, lng: -89.9234253 },
    TITLE: 'Target',
    ADDRESS: '3400 Green Mt Crossing Dr, Shiloh, IL 62269',
  },
  {
    POSITION: { lat: 38.6278706, lng: -90.3434393 },
    TITLE: 'Target',
    ADDRESS: '25 Brentwood Promenade Ct, Brentwood, MO 63144',
  },
]);

module.exports = mockGeoJson;
