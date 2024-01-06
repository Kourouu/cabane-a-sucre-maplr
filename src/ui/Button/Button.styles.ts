import styled from '@emotion/styled';

export const Button = styled.button(({ theme }) => ({
  border: `${theme.borderWidths.s}px solid ${theme.colors.secondary}`,
  cursor: 'pointer',
  borderRadius: theme.radii.s,
  color: theme.colors.secondary,
  padding: theme.space.m,
  backgroundColor: theme.colors.primary
}))