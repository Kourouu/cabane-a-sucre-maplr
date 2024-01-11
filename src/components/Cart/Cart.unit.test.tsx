import { render } from '../../tests/utils'

import { Cart } from './Cart'

describe('Cart', () => {
  it('should render default text since nothing has been added to cart', () => {
    const { getByText } = render(<Cart />)
    const defaultText = getByText(
      'Votre panier est vide. Et vos pancakes tristes :('
    )
    expect(defaultText).toBeInTheDocument()
  })
})
