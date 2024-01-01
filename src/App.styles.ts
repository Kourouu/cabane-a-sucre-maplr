import styled from '@emotion/styled';


export const Container = styled.div(({theme}) => ({
  height: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'stretch',
  backgroundColor: theme.colors.secondary,
  color: theme.colors.main,
}))