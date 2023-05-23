import { Tech } from "./styles";

interface ITech {
  id: number;
  tech: string;
}

export function ItemTech({ tech, id }: ITech) {
  return <Tech key={id}>{tech}</Tech>;
}
