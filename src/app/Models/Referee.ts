import {Personne} from './Personne';
export class Referee extends Personne {
  id: number;
  badge: string;


  constructor(firstName: string, lastName: string, phone: string,
              natIdNum: string, address: string, mailAddress: string,
              height: number, weight: number, birthdate: string,
              nationality: string, photoUrl: string, region: string,
              city: string, numpasseport: string, comment: string,
              id: number, badge: string) {
    super(firstName, lastName, phone, natIdNum,
      address, mailAddress, height, weight,
      birthdate, nationality, photoUrl,
      region, city, numpasseport, comment);
    this.id = id;
    this.badge = badge;
  }

}
