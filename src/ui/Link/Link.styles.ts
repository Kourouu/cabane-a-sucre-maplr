import styled from '@emotion/styled';

import { Link as RawLink } from 'react-router-dom';


export const Link = styled(RawLink)(({theme}) => ({
  display: 'flex',
  color: theme.colors.secondary,
  height: '100%'
}))