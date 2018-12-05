export class Player {
  id: number;
  licenseNumber: string;
  firstName: string;
  lastName: string;
  squadNumber: number;
  natIdNum: string;
  address: string;
  phone: string;
  mailAddress: string;
  height: number;
  weight: number;
  birthdate: string;
  actualTeamId: number;
  previousTeamId: number;
  nationality: string;
  category: string;
  photoUrl: string;


  constructor(id: number, licenseNumber: string, firstName: string, lastName: string, squadNumber: number, natIdNum: string, address: string, phone: string, mailAddress: string, height: number, weight: number, birthdate: string, actualTeamId: number, previousTeamId: number, nationality: string, category: string, photoUrl: string, ville: string, region: string) {
    this.id = id;
    this.licenseNumber = licenseNumber;
    this.firstName = firstName;
    this.lastName = lastName;
    this.squadNumber = squadNumber;
    this.natIdNum = natIdNum;
    this.address = address;
    this.phone = phone;
    this.mailAddress = mailAddress;
    this.height = height;
    this.weight = weight;
    this.birthdate = birthdate;
    this.actualTeamId = actualTeamId;
    this.previousTeamId = previousTeamId;
    this.nationality = nationality;
    this.category = category;
    this.photoUrl = photoUrl;
  }

}
