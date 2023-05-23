import { TitleContent } from "../../../../../components/TitleContent";
import { CardCourse } from "../../CardCourse";
import { ContentScreen, WrapperCards, WrapperGraduation } from "./styles";

import ArtJF from "../../../../../assets/ArtsJF/artJF2.svg";
import { ImgJF } from "../../../../../components/ImgJF";

import { dataCourse } from "../../../../../databases/dataCourses";

export function Graduation() {
  return (
    <ContentScreen>
      <TitleContent title="Formação" />
      <WrapperGraduation>
        <WrapperCards>
          {dataCourse.map((data) => (
            <CardCourse
              key={data.id}
              name={data.title}
              duration={data.duration}
              imageSchool={data.imgSchool}
              imageCertificate={data.imgCertificate}
              codeCertificate={data.code}
              techs={data.techs}
              link={data.link}
            />
          ))}
        </WrapperCards>

        <ImgJF image={ArtJF} size={25} />
      </WrapperGraduation>
    </ContentScreen>
  );
}
