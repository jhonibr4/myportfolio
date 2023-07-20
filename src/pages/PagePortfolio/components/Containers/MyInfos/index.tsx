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
import { useContext } from 'react'
import { ScrollContext } from '../../../../../context/ScrollContext'
import { SelectedPage } from '../../../../../shared/types'

export function MyInfos() {
  const { changeSelectedPage } = useContext(ScrollContext)
  const infos = [
    { name: 'Nome', value: 'Jhonathan Felix Braz' },
    { name: 'Idade', value: 22 },
    { name: 'Numero', value: '+55 (11)98162-5429' },
    { name: 'E-mail', value: 'jhonathan.braz@etec.sp.gov.br' },
  ]
  return (
    <ContentScreen id="infos">
      <ImgJF image={ArtJF1} size={25} animation={-150} position={0} />
      <WrapperInfos
        onViewportEnter={() => changeSelectedPage(SelectedPage.Infos)}
        whileInView="visible"
        initial="hidden"
        transition={{ ease: 'easeInOut', duration: 1 }}
        variants={{
          hidden: { opacity: 0, x: 150 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <TitleGreeting>Olá, eu sou Jhonathan Felix Braz.</TitleGreeting>
        <TextGretting>
          Sou um Técnico em Informática formado pela ETEC e atualmente estou
          estudando Ensino Superior em Análise e Desenvolvimento de Sistemas na
          Faculdade Uninter (2º semestre). Sou um Desenvolvedor Front-End e meu
          objetivo é trabalhar com as seguintes tecnologias: ReactJS, React
          Native, e com as linguagens: JavaScript e TypeScript.
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
