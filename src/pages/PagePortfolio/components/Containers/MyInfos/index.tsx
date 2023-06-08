import { ImgJF } from '../../../../../components/ImgJF'
import { IInfos } from '../../../../../interface/Infos'
import {
  ColumnInfo,
  ContentScreen,
  RowInfos,
  TextGretting,
  TitleGreeting,
  TitleInfo,
  WrapperInfos,
} from './styles'

import ArtJF1 from '../../../../../assets/ArtsJF/artJF1.svg'

export function MyInfos() {
  const infos = [
    { name: 'Name', value: 'Jhonathan Felix Braz' },
    { name: 'Age', value: 22 },
    { name: 'Address', value: 'Rua Pio XII' },
    { name: 'PhoneNumber', value: '+55 (11)98162-5429' },
    { name: 'Email', value: 'jhonathan.braz@etec.sp.gov.br' },
  ]
  return (
    <ContentScreen id="infos">
      <ImgJF image={ArtJF1} size={25} />
      <WrapperInfos>
        <TitleGreeting>Hi, I am Jhonathan Felix Braz</TitleGreeting>
        <TextGretting>
          I have a Graduated Technical Computer Technician in ETEC and at the
          moment studying Higher Education in Systems Analysis and Development
          at Faculdade Uninter (2nd semester). I am a Front End Developer and my
          objective is to work with the following technologies: ReactJS, React
          Native and with the languages: JavaScript and TypeScript
        </TextGretting>
        <RowInfos>
          <ColumnInfo>
            {infos.map((info: IInfos, i) => (
              <TitleInfo style={{ fontWeight: 'bold' }} key={i}>
                {info.name}
              </TitleInfo>
            ))}
          </ColumnInfo>
          <ColumnInfo>
            {infos.map((info: IInfos, i) => (
              <TitleInfo key={i}>{info.value}</TitleInfo>
            ))}
          </ColumnInfo>
        </RowInfos>
      </WrapperInfos>
    </ContentScreen>
  )
}
