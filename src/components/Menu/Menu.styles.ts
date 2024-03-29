import styled from '@emotion/styled';

export const MenuContainer = styled.div(({theme}) => ({
  height: theme.sizes.height.menu,
  padding: theme.space.s,
  display: 'flex',
  justifyContent: 'space-between',
  backgroundColor: theme.colors.primary,
  color: theme.colors.secondary,
}))

export const MenuItems = styled.div(() => ({
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}))