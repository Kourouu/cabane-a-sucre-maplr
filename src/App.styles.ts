import styled from '@emotion/styled';


export const Container = styled.div(({theme}) => ({
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.colors.secondary,
  color: theme.colors.main,
}))

export const Content = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.tertiary,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexGrow: '100',
}))