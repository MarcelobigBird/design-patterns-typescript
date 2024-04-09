import { BicycleFactory } from '../factories/bicycle-factory';
import { CarFactory } from '../factories/car-factory';
import { randomNumbers } from '../utils/random-numbers';
import { Vehicle } from '../vehicle/vehicle';

const vehicleNames = ['Fusca', 'Opala', 'Celta', 'Brasilia'];

export function randomCarAlgorithm(): Vehicle {
  const name = vehicleNames[randomNumbers(vehicleNames.length)];

  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();

  const car1 = carFactory.getVehicle(name);

  const car2 = carFactory.getVehicle(name);

  const bicycle = bicycleFactory.getVehicle(name);

  const cars = [car1, car2, bicycle];
  return cars[randomNumbers(cars.length)];
}
