export class Personne {
  firstName: string;
  lastName: string;
  phone: string;
  natIdNum: string;
  address: string;
  mailAddress: string;
  height: number;
  weight: number;
  birthdate: string;
  nationality: string;
  photoUrl: string;
  region: string;
  city: string;
  numpasseport: string;
  comment: string;

  constructor(firstName: string, lastName: string, phone: string, natIdNum: string,
              address: string, mailAddress: string, height: number, weight: number,
              birthdate: string, nationality: string, photoUrl: string, region: string,
              city: string, numpasseport: string, comment: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.natIdNum = natIdNum;
    this.address = address;
    this.mailAddress = mailAddress;
    this.height = height;
    this.weight = weight;
    this.birthdate = birthdate;
    this.nationality = nationality;
    this.photoUrl = photoUrl;
    this.region = region;
    this.city = city;
    this.numpasseport = numpasseport;
    this.comment = comment;
  }

}
