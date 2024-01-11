import { render } from '../../tests/utils'

import { ItemInCart } from './ItemInCart'

const itemInCart = {
  id: '3e7f36a6-8c58-4fbb-83a8-f930bba362e9',
  name: 'Organic clear Maple syrup 250 ml',
  image: 'base64Image',
  price: '7.99',
  maxQty: '10',
  type: 'CLEAR',
  qty: 1,
}

describe('ItemInCart', () => {
  it('should display product details in cart', () => {
    const { getByText } = render(<ItemInCart currentItem={itemInCart} />)
    expect(getByText('Organic clear Maple syrup 250 ml')).toBeInTheDocument()
    expect(getByText('Prix unitaire : 7.99$')).toBeInTheDocument()
    expect(getByText('Quantite : 1')).toBeInTheDocument()
    expect(getByText('Prix total avant taxes : 7.99$')).toBeInTheDocument()
    expect(getByText('Stock supplementaire disponible : 9')).toBeInTheDocument()
  })
})
