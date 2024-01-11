import React, { ReactElement } from 'react'
import { render, RenderOptions, cleanup } from '@testing-library/react'
import { ThemeProvider } from '@emotion/react'
import { theme } from '../theme/theme'
import { BrowserRouter } from 'react-router-dom'

afterEach(() => {
  cleanup()
})

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>{children}</BrowserRouter>
    </ThemeProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
