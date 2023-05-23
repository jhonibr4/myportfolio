import { ItemHardSkill } from "../../ItemHardSkill";
import { RowTechs, TitleTechs } from "../../ItemHardSkill/styles";
import {
  ContentHardSkills,
  ContentScreen,
  TitleHardSkills,
  WrapperHardSkills,
} from "./styles";

import {
  DiHtml5,
  DiCss3,
  DiReact,
  DiJava,
  DiPhp,
  DiPython,
} from "react-icons/di";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript, SiStyledcomponents } from "react-icons/si";

export function Techs() {
  const levelHTML = [true, true, true, false, false];

  return (
    <ContentScreen>
      <WrapperHardSkills>
        <TitleHardSkills>
          Hard <span>Skills</span>
        </TitleHardSkills>
        <ContentHardSkills>
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
        <RowTechs>
          <DiJava />
          <DiPhp />
          <DiPython />
        </RowTechs>
      </WrapperHardSkills>
    </ContentScreen>
  );
}
