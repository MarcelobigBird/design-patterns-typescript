import { MainDishBuilder } from './classes/main-dish-builder';
import { VeganDishBuilder } from './classes/vegan-dish-builder';

const mainDishBuilder = new MainDishBuilder();
mainDishBuilder.makeMeal().makeBeverage().makeDessert();

console.log(mainDishBuilder.getMeal());
console.log(mainDishBuilder.getPrice());

console.log();
mainDishBuilder.reset();
console.log(mainDishBuilder);

console.log();
const vegaDishBuilder = new VeganDishBuilder();
const veganMeal = vegaDishBuilder.makeMeal().getMeal();
console.log(veganMeal);
console.log(veganMeal.getPrice());
