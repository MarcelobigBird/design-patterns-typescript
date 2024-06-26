import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseClassic as MyDatabaseFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseFunction;
myDatabaseClassic.add({ name: 'Roberto', age: 30 });
myDatabaseClassic.add({ name: 'Joana', age: 50 });
myDatabaseClassic.add({ name: 'Luiza', age: 25 });
myDatabaseClassic.show();

console.log();
myDatabaseClassic.remove(1);
myDatabaseClassic.show();

console.log();
console.log(myDatabaseClassic === MyDatabaseFromModuleA);
