import styled from '@emotion/styled';

export const Button = styled.button(({ theme }) => ({
  border: `${theme.borderWidths.small}px solid ${theme.colors.secondary}`,
  cursor: 'pointer',
  borderRadius: theme.radii.small,
  color: theme.colors.secondary,
  padding: theme.space.medium,
  backgroundColor: theme.colors.main
}))