import School1 from "../assets/schools/school1.png";
import School2 from "../assets/schools/school2.png";
import School3 from "../assets/schools/school3.webp";
import Certificate2 from "../assets/certificateCourse/course2.jpg";
import Certificate3 from "../assets/certificateCourse/course3.jpg";

interface IDataCourses {
  id: string;
  title: string;
  imgSchool: string;
  imgCertificate?: string;
  duration: number;
  link?: string;
  code?: string;
  techs: string[];
}

export const dataCourse: IDataCourses[] = [
  {
    id: "8146dc13-c796-48c5-8160-2fd8bc2da47c",
    title: "Curso Técnico em Informática",
    duration: 1620,
    imgSchool: School1,
    imgCertificate: Certificate3,
    techs: ["Portugol", "HTML/CSS", "Java", "C#", "PHP", "Ionic"],
  },
  {
    id: "ea52bb5e-da69-4924-a622-250d8dc222b6",
    title: "Curso Web Moderno Completo com JavaScript 2022 + Projetos",
    duration: 97.5,
    imgSchool: School2,
    imgCertificate: Certificate2,
    code: "UC-8b72f2a1-e641-4af9-9755-350a8588ec08",
    techs: [
      "JavaScript",
      "NodeJS",
      "ESNext",
      "HTML/CSS",
      "Ajax",
      "Gulp",
      "Webpack",
      "JQuery",
      "BootSctrap",
      "React",
      "VueJS",
      "Angular 9",
      "SQL",
      "NoSQL",
      "Express",
      "Firebase",
      "AWS",
    ],
    link: "https://www.udemy.com/certificate/UC-8b72f2a1-e641-4af9-9755-350a8588ec08/",
  },
  {
    id: "f80bc24c-708a-4810-9491-61b7551c0823",
    title:
      "Curso TypeScript do básico ao avançado (c/ React, Express) em Informática",
    duration: 14,
    imgSchool: School3,
    imgCertificate: Certificate3,
    code: "UC-404aed93-a048-40c6-b728-9d7cf4a716a9",
    techs: ["TypeScript", "React", "Express"],
    link: "https://www.udemy.com/certificate/UC-404aed93-a048-40c6-b728-9d7cf4a716a9",
  },
];
