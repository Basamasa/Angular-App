export class Person {
    id = 0;
    first = '';
    second = '';
    paid='0';
    nickname = '';
    city = '';
    male=false;
    birthday!:Date;

    constructor (id: number, first: string) {
      this.id = id
      this.first = first
    }

    guiRep () {
      return this.first
    }
}

export class PersonService {
  static createPersons (count:number):Array<Person> {
    let persons = Array<Person>()
    let names = ['Reyu', 'Joshi', 'Andy', 'Helen', 'Carlo', 'Peter', 'John']
    let secondnames = ['Murakami', 'Rudolp', 'Kretschmer', 'Helenbird', 'Carlosoto', 'Peterson', 'Jonson']
    let nicknames = ['The Flow', 'Rambo', 'Cruncher', 'Delightfull', 'Weired', 'Orderly', 'King']
    let cities = ['Gothham', 'Berlin', 'New Deli', 'Bejin', 'Rom', 'Budapest', 'New Orleans']
    for (let index = 0; index < count; index++) {
      let person = new Person(index, names[index % names.length])
      person.second = secondnames[index % secondnames.length]
      person.birthday = new Date(858594654654 + index * 60 * 1000 * 60 * 24)
      person.paid = '' + index * 245
      person.nickname = nicknames[index % nicknames.length]
      person.city = cities[index % cities.length]
      persons.push(person)
    }
    return persons
  }
}
