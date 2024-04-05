import { MealCompositeProtocol } from '../interfaces/meal-composite-protocol';

export class MealBox implements MealCompositeProtocol {
  private readonly _children: MealCompositeProtocol[] = [];

  public getPrice(): number {
    return this._children.reduce((acumulador, meal) => +(acumulador + meal.getPrice()).toFixed(2), 0);
  }

  public add(...meal: MealCompositeProtocol[]): void {
    meal.forEach((value) => this._children.push(value));
  }
}
