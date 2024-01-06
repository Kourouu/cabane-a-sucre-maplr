import styled from '@emotion/styled';

export const QuantityContainer = styled.div(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}))

export const InputContainer = styled.div(() => ({
  display: 'flex',
  justifyContent: 'center'
}))

export const Input = styled.input(({ theme }) => ({
  border: `${theme.borderWidths.s}px solid ${theme.colors.primary}`,
  borderRadius: theme.radii.xs,
}))