import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

export const ProductCardContainer = styled(Link)<{isActive: boolean}>(({theme, isActive}) => (`
  border-radius: ${theme.radii.small}px;
  box-shadow: 0px 8px 20px 0px rgba(0,0,0,0.04);
  ${isActive && 'cursor: pointer'};
  transition: all .2s ease-in-out;
  text-decoration: none;
  color: ${theme.colors.main}
  &:hover {
    transform: scale(1.05); 
  }
`))

export const List = styled.ul(() => ({
  listStyleType: 'none',
  padding: 0,
  margin: 0

}))