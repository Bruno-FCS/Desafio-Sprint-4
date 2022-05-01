export interface VeiculosData extends Array<VeiculoData> {}

export interface VeiculoData{
  id: number | string
  vin: string
  odometer: number | string
  tirePressure: Array<number> | string
  status: string
  batteryStatus: string
  fuelLevel: number | string
  lat: number | string
  long: number | string
}

export interface VeiculosDataAPI {
  vehicleData: VeiculosData;
}
