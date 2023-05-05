export async function getGeoJson(product: string) {
  if (product === 'All Products') {
    const resultArr = mockData.map((data) => {
      return data.locations;
    });
    return resultArr.flat();
  } else {
    const filteredData = mockData.filter((data) => data.product === product);
    const resultArr = filteredData.map((data) => {
      return data.locations;
    });
    return resultArr.flat();
  }
}

const mockData = [
  {
    product: 'IPA',
    locations: [
      {
        position: { lat: 38.5859807, lng: -89.9875464 },
        title: 'Total Wine',
        address:
          '5905 North Illinois Street Lincoln Place Shopping Center, Fairview Heights, IL 62208',
      },
      {
        position: { lat: 38.7735011, lng: -90.7017746 },
        title: 'Dogwood Wine and Spirits',
        address: "2601 State Hwy K A, O'Fallon, MO 63368",
      },
      {
        position: { lat: 38.5731181, lng: -89.9234253 },
        title: 'Target',
        address: '3400 Green Mt Crossing Dr, Shiloh, IL 62269',
      },
      {
        position: { lat: 38.6278706, lng: -90.3434393 },
        title: 'Target',
        address: '25 Brentwood Promenade Ct, Brentwood, MO 63144',
      },
    ],
  },
  {
    product: 'Lager',
    locations: [
      {
        position: { lat: 38.5859807, lng: -89.9875464 },
        title: 'Total Wine',
        address:
          '5905 North Illinois Street Lincoln Place Shopping Center, Fairview Heights, IL 62208',
      },
      {
        position: { lat: 38.5854523, lng: -89.9106845 },
        title: 'Sav-On Liquor & Wine',
        address: "720 S Lincoln Ave, O'Fallon, IL 62269",
      },
    ],
  },
];
