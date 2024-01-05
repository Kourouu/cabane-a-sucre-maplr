import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Button = styled(Link)(({ theme }) => ({
  border: `${theme.borderWidths.small}px solid ${theme.colors.secondary}`,
  borderRadius: theme.radii.small,
  color: theme.colors.secondary,
  padding: theme.space.medium,
  backgroundColor: theme.colors.main
}))