import { ImgFigure } from "./styles";

interface IImgJF {
  image: string;
  size: number;
}
export function ImgJF({ image, size }: IImgJF) {
  return <ImgFigure src={image} size={size} />;
}
