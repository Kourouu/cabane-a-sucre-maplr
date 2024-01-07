import styled from '@emotion/styled';

export const Image = styled.img<{initialWidth: boolean}>(({ initialWidth }) => ({
  width: initialWidth ? 'auto' : '20vw',
  height: 'inherit',
  alignSelf: 'center'
}))