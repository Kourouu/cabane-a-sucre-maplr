import { render } from '../../tests/utils'

import { Link } from './Link'

describe('Link', () => {
  it('should display text in link', () => {
    const { getByRole } = render(
      <Link to={'destination'}>Some text for my link</Link>
    )
    const link = getByRole('link')
    expect(link).toHaveTextContent('Some text for my link')
  })
})
