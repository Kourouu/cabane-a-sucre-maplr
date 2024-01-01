import styled from '@emotion/styled';

export const ProductsContainer = styled.div(() => ({
  display: 'flex',
  flexBasis: '100%',
  // height: '100%',
  // alignContent: 'stretch'
}))

export const CardsContainer = styled.header(() => ({
  display: 'flex',
  flexBasis: '100%',
  justifyContent: 'space-evenly',
  position: 'relative',
  // height: '100%',
  textAlign: 'center',
  alignItems: 'center'
}))

export const Video = styled.video(() => ({
  objectFit: 'cover',
  width: '100vw',
  // height: '100%',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: -1
}))