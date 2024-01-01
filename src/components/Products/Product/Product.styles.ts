import styled from '@emotion/styled';

import { Link } from 'react-router-dom';

export const ProductContainer = styled(Link)(({theme}) => ({
  border: `${theme.borderWidths.small}px solid black`,
  cursor: 'pointer'
}))

export const Image = styled.img(() => ({
  width: '20vw'
}))