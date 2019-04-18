export class Adress {
    country = '';
    city = '';
    street = '';
    number = 10;

    guiRep (): string {
      return this.city + ' ' + this.country + ' ' + this.street + ' ' + this.number
    }
}

export class AdressService {
  static createAdresses (count:number):Array<Adress> {
    let array = new Array<Adress>()
    let countries = ['USA', 'Germany', 'India', 'Russia', 'Brasil', 'UK']
    let cities = ['Gothham', 'Berlin', 'New Deli', 'Moscow', 'Rio', 'London']
    let streets = ['Rumble Street', 'Neuendorfer Str.', 'Raband Rudeu', 'Novosibirskaja', 'Sao Paolo', 'Abey Road']
    for (let i = 0; i < count; i++) {
      let adress = new Adress()
      adress.country = countries[i % countries.length]
      adress.city = cities[i % cities.length]
      adress.street = streets[i % streets.length]
      adress.number = i + 22
      array.push(adress)
    }
    return array
  }
}
