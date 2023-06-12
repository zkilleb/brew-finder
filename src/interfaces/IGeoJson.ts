export interface IProduct {
  product: string;
  location: IGeoJSON[];
}

export interface IGeoJSON {
  POSITION: ILatLng;
  TITLE: string;
  ADDRESS: string;
}

export interface ILatLng {
  lat: number;
  lng: number;
}
