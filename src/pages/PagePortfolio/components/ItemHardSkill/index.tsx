import { ContainerItemHardSkill, RowIconLevel } from "./styles";

import { IHardSkill } from "../../../../interface/HardSkill";

import { BsHexagonFill, BsHexagon } from "react-icons/bs";

export function ItemHardSkill({ levels, image }: IHardSkill) {
  return (
    <ContainerItemHardSkill>
      {image}
      <RowIconLevel>
        {levels.map((level, i) =>
          level === true ? (
            <BsHexagonFill key={i} className="iconLevel" />
          ) : (
            <BsHexagon key={i} className="iconLevel" />
          )
        )}
      </RowIconLevel>
    </ContainerItemHardSkill>
  );
}
