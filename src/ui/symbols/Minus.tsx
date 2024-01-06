import * as S from './symbols.styles';

export const Minus = ({onClick, isActive}: {onClick: () => void, isActive: boolean}) => (
  <S.Svg 
    isActive={isActive}
    viewBox="0 0 24 24"
    fill="blue"
    onClick={onClick}
  >
    <path
      d="M6 12L18 12" 
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </S.Svg>
)