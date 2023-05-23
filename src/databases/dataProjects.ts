import FoyerLogo from "../assets/LogoProjects/foyer.png";
import FindAFriendLogo from "../assets/LogoProjects/findafriend.svg";
import RocketNFTsLogo from "../assets/LogoProjects/RocketNFTs.svg";
import ProffyLogo from "../assets/LogoProjects/proffy.svg";
import BeTheHeroLogo from "../assets/LogoProjects/bethehero.svg";

import FindAFriend1 from "../assets/Projects/FindAFriend/1.png";
import FindAFriend2 from "../assets/Projects/FindAFriend/2.png";
import FindAFriend3 from "../assets/Projects/FindAFriend/3.png";

import RocketNFTs1 from "../assets/Projects/RocketNFTs/1.png";
import RocketNFTs2 from "../assets/Projects/RocketNFTs/2.png";
import RocketNFTs3 from "../assets/Projects/RocketNFTs/3.png";

interface IDataProjects {
  id: string;
  name: string;
  description: string;
  imageLogo: string;
  imagesProject: string[];
  techs: string[];
  link: string;
}

export const dataProjects: IDataProjects[] = [
  {
    id: "d9656fed-a41b-4d31-a134-08f1d81c6cdd",
    name: "Foyer",
    imageLogo: FoyerLogo,
    description:
      "Foyer é um projeto desenvolvido com React Native e tem o objetivo de facilitar as funcionalidade no gerenciamento de condomínios. ",
    imagesProject: [FindAFriend1, FindAFriend2, FindAFriend3],
    techs: ["React Native", "JavaScript", "Express", "Axios"],
    link: "https://github.com/jhonibr4/NewFoyer",
  },
  {
    id: "37957c04-8b9f-4a08-9c12-9b5dad746411",
    name: "Find A Friend",
    imageLogo: FindAFriendLogo,
    description:
      "Find A Friend é um desafio/projeto desenvolvido com ViteJs que tem o foco em armazenar cadastros de pets para adoção.",
    imagesProject: [FindAFriend1, FindAFriend2, FindAFriend3],
    techs: ["ViteJS", "TypeScript", "Styled Components"],
    link: "https://github.com/jhonibr4/Find-A-Friend",
  },
  {
    id: "cd79a987-9c72-4f9e-a320-f3395b184b51",
    name: "Rocket NFTs",
    imageLogo: RocketNFTsLogo,
    description:
      "FRocketNFTs é um desafio/projeto Landing Page desenvolvido com ViteJs e esse projeto tem como objetivo de apresentar uma NFT fictícia.",
    imagesProject: [RocketNFTs1, RocketNFTs2, RocketNFTs3],
    techs: ["ViteJS", "TypeScript", "Styled Components"],
    link: "https://github.com/jhonibr4/RocketNFT",
  },
  {
    id: "bf4ac710-d478-47ef-84f9-9203bae20711",
    name: "Proffy",
    imageLogo: ProffyLogo,
    description:
      "Foyer é um projeto desenvolvido com React Native e tem o objetivo de facilitar as funcionalidade no gerenciamento de condomínios. ",
    imagesProject: [FindAFriend1, FindAFriend2, FindAFriend3],
    techs: ["React Native", "JavaScript", "Express", "Axios"],
    link: "https://github.com/jhonibr4/ProffyApp",
  },
  {
    id: "65494f39-1579-4677-a689-37564d257fe8",
    name: "Be The Hero",
    imageLogo: BeTheHeroLogo,
    description:
      "Foyer é um projeto desenvolvido com React Native e tem o objetivo de facilitar as funcionalidade no gerenciamento de condomínios. ",
    imagesProject: [FindAFriend1, FindAFriend2, FindAFriend3],
    techs: ["React Native", "JavaScript", "Express", "Axios"],
    link: "https://github.com/jhonibr4/be-the-hero",
  },
  {
    id: "655f5397-297c-430a-82aa-33aa8fe634bc",
    name: "Foyer",
    imageLogo: FoyerLogo,
    description:
      "Foyer é um projeto desenvolvido com React Native e tem o objetivo de facilitar as funcionalidade no gerenciamento de condomínios. ",
    imagesProject: [FindAFriend1, FindAFriend2, FindAFriend3],
    techs: ["React Native", "JavaScript", "Express", "Axios"],
    link: "",
  },
];
