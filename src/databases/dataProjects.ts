import FindAFriendLogo from '../assets/LogoProjects/findafriend.svg'
import MjCodesLogo from '../assets/LogoProjects/mjcodes.png'
import BeTheHeroLogo from '../assets/LogoProjects/bethehero.svg'
import ProjectWithoutLogo from '../assets/LogoWhite.svg'

import FindAFriend1 from '../assets/Projects/FindAFriend/1.png'
import FindAFriend2 from '../assets/Projects/FindAFriend/2.png'
import FindAFriend3 from '../assets/Projects/FindAFriend/3.png'

import PixelEmporium1 from '../assets/Projects/PixelEmporium/1.svg'
import PixelEmporium2 from '../assets/Projects/PixelEmporium/2.svg'
import PixelEmporium3 from '../assets/Projects/PixelEmporium/3.svg'

import SakuraSushiBar1 from '../assets/Projects/SakuraSushiBar/1.svg'
import SakuraSushiBar2 from '../assets/Projects/SakuraSushiBar/2.svg'
import SakuraSushiBar3 from '../assets/Projects/SakuraSushiBar/3.svg'

import BeTheHero1 from '../assets/Projects/BeTheHero/1.png'
import BeTheHero2 from '../assets/Projects/BeTheHero/2.png'
import BeTheHero3 from '../assets/Projects/BeTheHero/3.png'

import MjCodes1 from '../assets/Projects/MjCodes/1.svg'
import MjCodes2 from '../assets/Projects/MjCodes/2.svg'
import MjCodes3 from '../assets/Projects/MjCodes/3.svg'

interface IDataProjects {
  id: string
  name: string
  description: string
  imageLogo: string
  imagesProject: string[]
  techs: string[]
  link: string
  typeProject: string
}

export const dataProjects: IDataProjects[] = [
  {
    id: '65494f39-1579-4677-a689-37564d257fe2',
    name: 'Mj Codes Techs',
    imageLogo: MjCodesLogo,
    description:
      'Mj Codes Techs é um projeto landing page em que faço parte desenvolvido com NextJS, o site foi criado para divulgação da startup e mostrar o serviço que será oferecido pela a equipe para trabalhos freelancer.',
    imagesProject: [MjCodes1, MjCodes2, MjCodes3],
    techs: ['React Native', 'JavaScript', 'Express', 'Axios'],
    link: 'https://mjcodestechs.com.br',
    typeProject: 'site',
  },
  {
    id: 'd9656fed-a41b-4d31-a134-08f1d81c6cd0',
    name: 'Find A Friend',
    imageLogo: FindAFriendLogo,
    description:
      'Find A Friend é um desafio/projeto desenvolvido com ViteJs que tem o foco em armazenar cadastros de pets para adoção.',
    imagesProject: [FindAFriend1, FindAFriend2, FindAFriend3],
    techs: ['React Native', 'JavaScript', 'Express', 'Axios'],
    link: 'https://github.com/jhonibr4/Find-A-Friend',
    typeProject: 'github',
  },
  {
    id: 'bf4ac710-d478-47ef-84f9-9203bae20719',
    name: 'Be The Hero',
    imageLogo: BeTheHeroLogo,
    description:
      'Be The Hero é um desafio/projeto desenvolvido com ReactJS na 11ª edição da Semana OmniStack que tem o foco conectar pessoas que estão disposta a ajudar ONGS que oferece ajuda para animais com dificuldade.',
    imagesProject: [BeTheHero1, BeTheHero2, BeTheHero3],
    techs: ['React Native', 'JavaScript', 'Express', 'Axios'],
    link: 'https://github.com/jhonibr4/be-the-hero',
    typeProject: 'github',
  },

  {
    id: '37957c04-8b9f-4a08-9c12-9b5dad746418',
    name: 'Pixel Emporium',
    imageLogo: ProjectWithoutLogo,
    description:
      'Pixel Emporium foi um design de um projeto front-end desenvolvido para aprimorar minhas habilidades com a ferramente Figma',
    imagesProject: [PixelEmporium1, PixelEmporium2, PixelEmporium3],
    techs: ['Figma'],
    link: 'https://www.figma.com/proto/Vfr7TGyFMMhGVJ2XGHkNkA/Pixel-Emporium?node-id=2-2&scaling=scale-down&mode=design&t=vLMvdx8lo2Uo4gTf-1',
    typeProject: 'figma',
  },
  {
    id: 'cd79a987-9c72-4f9e-a320-f3395b184b57',
    name: 'Sakura Sushi Bar',
    imageLogo: ProjectWithoutLogo,
    description:
      'Sakura Sushi Bar foi um design de um projeto front-end desenvolvido para aprimorar minhas habilidades com a ferramente Figma',
    imagesProject: [SakuraSushiBar1, SakuraSushiBar2, SakuraSushiBar3],
    techs: ['Figma'],
    link: 'https://www.figma.com/proto/ffOG73IhXP4RmEBDCdulSi/Sakura-Sushi-Bar?type=design&node-id=1-2&t=r5HWUkfSn7VPliyM-1&scaling=scale-down&page-id=0%3A1&mode=design',
    typeProject: 'figma',
  },
]
