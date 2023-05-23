import { ContentScreen, WrapperCardsProject } from "./styles";

import { CardProject } from "../../CardProject";
import { TitleContent } from "../../../../../components/TitleContent";

import { dataProjects } from "../../../../../databases/dataProjects";

export function Projects() {
  return (
    <ContentScreen>
      <TitleContent title="Projetos" />
      <WrapperCardsProject>
        {dataProjects.map((project) => (
          <CardProject
            key={project.id}
            id={project.id}
            imageLogo={project.imageLogo}
            name={project.name}
            description={project.description}
            imagesProject={project.imagesProject}
            techs={project.techs}
            link={project.link}
          ></CardProject>
        ))}
      </WrapperCardsProject>
    </ContentScreen>
  );
}
