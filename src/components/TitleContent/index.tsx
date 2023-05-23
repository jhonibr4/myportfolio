import { Title } from "./styles";

interface ITitle {
  title: string;
}

export function TitleContent({ title }: ITitle) {
  return <Title>{title}</Title>;
}
