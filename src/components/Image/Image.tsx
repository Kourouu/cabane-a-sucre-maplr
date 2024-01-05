
import * as S from './Image.styles';

type ImageProps = Pick<HTMLImageElement, 'alt' | 'src'> & {
  initialWidth?: boolean
}


export const Image = ({src, alt, initialWidth = false}: ImageProps) => {

  return (
    <S.Image src={src} alt={alt} initialWidth={initialWidth}/>
  )
}