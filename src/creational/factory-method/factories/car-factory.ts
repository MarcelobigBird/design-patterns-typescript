import { Car } from '../vehicle/car';
import { Vehicle } from '../vehicle/vehicle';
import { VehicleFactory } from './ vehicle-factory';

export class CarFactory extends VehicleFactory {
  public getVehicle(vehicleName: string): Vehicle {
    return new Car(vehicleName);
  }
}
