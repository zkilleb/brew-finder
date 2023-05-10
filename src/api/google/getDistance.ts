import { ILatLng } from '../../interfaces/IGeoJson';

export async function getDistance(
  startingCoordinates: ILatLng[],
  endingLat: number,
  endingLng: number,
) {
  const service = new google.maps.DistanceMatrixService();
  const response = await service.getDistanceMatrix({
    destinations: startingCoordinates,
    origins: [{ lat: endingLat, lng: endingLng }],
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.IMPERIAL,
  });
  return response.rows[0].elements;
}
