import { Vehicle } from '../vehicle/vehicle';

export class Bicycle implements Vehicle {
  constructor(private name: string) {}

  public pickUp(customerName: string): void {
    console.log(`${this.name} está buscando ${customerName}`);
  }

  public stop(): void {
    console.log(`${this.name} parou.`);
  }
}
