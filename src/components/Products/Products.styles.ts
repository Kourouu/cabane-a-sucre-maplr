import styled from '@emotion/styled';

export const ProductsContainer = styled.div(() => ({
  display: 'flex',
  flexBasis: '100%',
}))

export const CardsContainer = styled.header(() => ({
  display: 'flex',
  flexBasis: '100%',
  justifyContent: 'space-evenly',
  position: 'relative',
  textAlign: 'center',
  alignItems: 'center'
}))

export const Video = styled.video(() => ({
  objectFit: 'cover',
  width: '100vw',
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: -1
}))