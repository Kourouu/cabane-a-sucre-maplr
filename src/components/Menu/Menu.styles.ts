import styled from '@emotion/styled';

export const MenuContainer = styled.div(({theme}) => ({
  height: theme.sizes.height.menu,
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: theme.colors.main,
  color: theme.colors.secondary,
}))