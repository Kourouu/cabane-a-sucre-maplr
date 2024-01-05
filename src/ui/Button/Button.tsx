import * as S from './Button.styles';

type ButtonProps = {
  text: string
}

export const Button = (({text}: ButtonProps) => (<S.Button to={'../products'}>{text}</S.Button>))