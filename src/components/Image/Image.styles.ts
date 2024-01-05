import styled from '@emotion/styled';

export const Image = styled.img<{initialWidth: boolean}>(({ initialWidth }) => ({
  width: initialWidth ? '100%' : '20vw',
  height: initialWidth ? '100%' : '100%',
  alignSelf: 'center'
}))