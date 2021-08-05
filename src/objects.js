lconst createPerson = (name, age) => {
  return {
    name: name,
    age: age,
  }
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object.age;
};

const hasProperty = (property, object) => {
  if (object.hasOwnProperty(property)) {
    return true;
  }
  else {
    return false;
  }
};

const isOver65 = person => {
  if (person.age > 65) {
    return true;
  }
  else {
    return false;
  }
};

const getAges = people => {
  const ages = people.map(person => person.age);
  return ages;
};

const findByName = (name, people) => {
  return people.find(object => object.name === name);
};

const findHondas = cars => {
  return cars.filter((honda) => honda.manufacturer === 'Honda');

  /*const hondas = [];
  for (let i = 0; i < cars.length; i++) {
    if (cars[i].manufacturer === "honda") {
      hondas.push(cars[i]);
    }
  }
  return hondas;*/
};

const averageAge = people => {
  let totalledAge = people.reduce((total, currentUser) => total + currentUser.age, 0);
  return totalledAge / people.length;
};

const createTalkingPerson = (name, age) => {
  let talkingPerson = {
    name: name,
    age: age,
    introduce(person) {
      return "Hi " + person + ", my name is " + this.name + " and I am " + this.age + "!";
    }
  };
  return talkingPerson;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
