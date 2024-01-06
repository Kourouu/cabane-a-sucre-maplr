import styled from '@emotion/styled';

export const CartContainer = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexBasis: '100%',
  flexDirection: 'column',
  gap: theme.space.m,
}))

export const ButtonsContainer = styled.div(() => ({
  display: 'flex'
}))