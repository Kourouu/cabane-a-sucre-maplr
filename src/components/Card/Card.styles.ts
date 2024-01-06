import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

export const ProductCardContainer = styled(Link)<{active: boolean}>(({theme, active}) => (`
  border-radius: ${theme.radii.s}px;
  box-shadow: 0px 8px 20px 0px rgba(0,0,0,0.04);
  ${active && 'cursor: pointer'};
  transition: all .2s ease-in-out;
  text-decoration: none;
  color: ${theme.colors.primary}
  &:hover {
    transform: scale(1.05); 
  }
`))

export const List = styled.ul(() => ({
  listStyleType: 'none',
  textAlign: 'center',
  padding: 0,
  margin: 0

}))