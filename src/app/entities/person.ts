export class Person{
  birthDate?:Date;
  email?:string;
  phoneNumber?:string;
  userName?:string;
  password?:string;
  firstName?:string;
  lastName?:string;
  bio?:string;
  gender?:GENDER
}

enum GENDER {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER'
}
