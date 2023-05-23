export interface ICourse {
  name: string;
  duration: number;
  imageSchool: string;
  imageCertificate?: string;
  codeCertificate?: string;
  techs: string[];
  link?: string;
}
