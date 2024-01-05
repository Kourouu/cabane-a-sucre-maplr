import * as S from './Button.styles';

interface ButtonProps {
  text: string,
  onClick: () => void
}

export const Button = (({text, onClick}: ButtonProps) => (<S.Button onClick={onClick}>{text}</S.Button>))