import { render } from '../../tests/utils'
import { Menu } from './Menu'

describe('Menu', () => {
  const { getByText, getByRole } = render(<Menu />)
  const maplrLogo = getByRole('img')
  const catalogLink = getByText('Catalogue')
  const cartLink = getByText('Panier')

  it('should display homepage image and links', () => {
    expect(maplrLogo).toBeInTheDocument()
    expect(catalogLink).toBeInTheDocument()
    expect(cartLink).toBeInTheDocument()
  })
})
