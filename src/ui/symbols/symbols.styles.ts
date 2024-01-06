import styled from '@emotion/styled';

export const Svg = styled.svg<{ isActive: boolean}>(({theme, isActive}) => ({
  height: theme.sizes.height.symbols,
  cursor: isActive ? 'pointer' : 'not-allowed'
}))