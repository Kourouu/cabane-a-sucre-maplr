import { render } from '../../tests/utils'

import { Home } from './Home'

describe('Home', () => {
  it('should have a button to reach products list', () => {
    const { getByText } = render(<Home />)
    expect(getByText('Acceder au catalogue')).toBeInTheDocument()
  })
})
