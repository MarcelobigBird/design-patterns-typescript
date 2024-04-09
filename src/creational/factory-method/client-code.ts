import { CarFactory } from './factories/car-factory';
import { randomCarAlgorithm } from './main/random-vehicle-algorithm';
import { randomNumbers } from './utils/random-numbers';

const carFactory = new CarFactory();
const customersNames = ['Ana', 'Joana', 'Helena', 'João'];
const vehicleNames = ['Fusca', 'Opala', 'Celta', 'Brasilia'];

for (let i = 0; i < 4; i++) {
  const vehicle = randomCarAlgorithm();

  vehicle.pickUp(customersNames[randomNumbers(customersNames.length)]);
  vehicle.stop();

  console.log();
  const newCar = carFactory.pickUp(
    customersNames[randomNumbers(customersNames.length)],
    vehicleNames[randomNumbers(customersNames.length)],
  );
  console.log(newCar);
  console.log('****************************');
}
