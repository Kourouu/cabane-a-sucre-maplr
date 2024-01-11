import { render } from '../../tests/utils'

import { Card } from './Card'

const product = {
  id: 'f6f458c6-7733-445b-a0d1-48109960d3cb',
  name: 'Organic Amber Maple syrup 250 ml',
  image: 'imageBase64',
  price: '8.78',
  maxQty: '100',
  type: 'AMBER',
}

describe('Card', () => {
  it('should display product info', () => {
    const { getByText } = render(<Card product={product} />)
    expect(
      getByText('Nom : Organic Amber Maple syrup 250 ml')
    ).toBeInTheDocument()
    expect(getByText('Prix : 8.78')).toBeInTheDocument()
    expect(getByText('Quantite maximum : 100')).toBeInTheDocument()
    expect(getByText('Type : AMBER')).toBeInTheDocument()
  })
})
