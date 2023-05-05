export interface IProduct {
  product: string;
  location: IGeoJSON[];
}

export interface IGeoJSON {
  position: ILatLng;
  title: string;
  address: string;
}

export interface ILatLng {
  lat: number;
  lng: number;
}
