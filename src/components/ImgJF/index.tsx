import { ImgFigure } from './styles'

interface IImgJF {
  image: string
  size: number
  animation: number
  position: number
}
export function ImgJF({ image, size, animation, position }: IImgJF) {
  return (
    <ImgFigure
      src={image}
      size={size}
      whileInView="visible"
      initial="hidden"
      transition={{ ease: 'easeInOut', duration: 1 }}
      variants={{
        hidden: { opacity: 0, x: animation },
        visible: { opacity: 1, x: position },
      }}
    />
  )
}
