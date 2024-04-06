const personPrototype = {
  firstname: 'Luiz',
  lastname: 'Miranda',
  age: 30,

  fullName() {
    return `${this.firstname} ${this.lastname}`;
  },
};

const anotherPerson = Object.create(personPrototype);
anotherPerson.firstname = 'Joana';
console.log(anotherPerson);
console.log(anotherPerson.firstname);
console.log(anotherPerson.fullName());
