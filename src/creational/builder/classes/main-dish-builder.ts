import { MealBuilderProtocol } from '../interfaces/meal-builder-protocol';
import { MealBox } from './meal-box';
import { Beans, Beverage, Dessert, Meat, Rice } from './meals';

export class MainDishBuilder implements MealBuilderProtocol {
  private _meal: MealBox = new MealBox();

  public reset(): this {
    this._meal = new MealBox();
    return this;
  }

  public makeMeal(): this {
    const rice = new Rice('Arroz', 20.59);
    const beans = new Beans('Feijão', 10.0);
    const meat = new Meat('Picanha', 50.0);

    this._meal.add(rice, beans, meat);
    return this;
  }

  public makeBeverage(): this {
    const beverage = new Beverage('Coca-cola', 15.99);
    this._meal.add(beverage);
    return this;
  }

  public makeDessert(): this {
    const dessert = new Dessert('Pudim', 7.95);
    this._meal.add(dessert);
    return this;
  }

  public getMeal(): MealBox {
    return this._meal;
  }

  public getPrice(): number {
    return this._meal.getPrice();
  }
}
