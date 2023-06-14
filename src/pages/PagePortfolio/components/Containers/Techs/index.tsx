import { useContext } from 'react'
import { ItemHardSkill } from '../../ItemHardSkill'
import { RowTechs, TitleTechs } from '../../ItemHardSkill/styles'
import {
  ContentHardSkills,
  ContentScreen,
  TitleHardSkills,
  WrapperHardSkills,
} from './styles'

import {
  DiHtml5,
  DiCss3,
  DiReact,
  DiJava,
  DiPhp,
  DiPython,
} from 'react-icons/di'
import { IoLogoJavascript } from 'react-icons/io5'
import { SiTypescript, SiStyledcomponents } from 'react-icons/si'
import { ScrollContext } from '../../../../../context/ScrollContext'
import { SelectedPage } from '../../../../../shared/types'

export function Techs() {
  const { changeSelectedPage } = useContext(ScrollContext)
  const levelHTML = [true, true, true, false, false]

  return (
    <ContentScreen id="techs">
      <WrapperHardSkills>
        <TitleHardSkills>
          Hard <span>Skills</span>
        </TitleHardSkills>
        <ContentHardSkills
          onViewportEnter={() => changeSelectedPage(SelectedPage.Techs)}
          whileInView="visible"
          initial="hidden"
          transition={{ ease: 'easeInOut', duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 150 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <ItemHardSkill image={<DiHtml5 />} levels={levelHTML} />
          <ItemHardSkill image={<DiCss3 />} levels={levelHTML} />
          <ItemHardSkill image={<DiReact />} levels={levelHTML} />
          <ItemHardSkill image={<SiTypescript />} levels={levelHTML} />
          <ItemHardSkill image={<IoLogoJavascript />} levels={levelHTML} />
          <ItemHardSkill image={<SiStyledcomponents />} levels={levelHTML} />
        </ContentHardSkills>
        <TitleTechs>
          <p>Tecnologias</p>
          já <span>utilizadas</span>
        </TitleTechs>
        <RowTechs
          onViewportEnter={() => changeSelectedPage(SelectedPage.Techs)}
          whileInView="visible"
          initial="hidden"
          transition={{ ease: 'easeInOut', duration: 1, delay: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <DiJava />
          <DiPhp />
          <DiPython />
        </RowTechs>
      </WrapperHardSkills>
    </ContentScreen>
  )
}
