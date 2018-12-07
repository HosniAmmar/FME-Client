import {Personne} from './Personne';

export class Player extends Personne {
  id: number;
  licenseNumber: String;
  squadNumber: number;
  actualTeamId: number;
  previousTeamId: number;
  category: string;
  photoUrl: string;
  
  constructor(firstName: string, lastName: string,
              phone: string, natIdNum: string,
              address: string, mailAddress: string,
              height: number, weight: number, birthdate: string,
              nationality: string, photoUrl: string, region: string,
              city: string, numpasseport: string, comment: string,
              id: number, licenseNumber: String, squadNumber: number,
              actualTeamId: number, previousTeamId: number,
              category: string) {
    super(firstName, lastName, phone,
      natIdNum, address, mailAddress,
      height, weight, birthdate,
      nationality, photoUrl,
      region, city, numpasseport,
      comment);
    this.id = id;
    this.licenseNumber = licenseNumber;
    this.squadNumber = squadNumber;
    this.actualTeamId = actualTeamId;
    this.previousTeamId = previousTeamId;
    this.category = category;
  }
}
