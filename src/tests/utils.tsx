import React, { ReactElement } from 'react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import { render, RenderOptions, cleanup } from '@testing-library/react'
import { ThemeProvider } from '@emotion/react'
import { theme } from '../theme/theme'
import { BrowserRouter } from 'react-router-dom'

afterEach(() => {
  cleanup()
})

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>{children}</BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
