import * as S from './symbols.styles';

export const Minus = ({onClick}: {onClick: () => void}) => (
  <S.Svg 
    viewBox="0 0 24 24"
    fill="blue"
    onClick={onClick}
  >
    <path d="M6 12L18 12" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </S.Svg>
)