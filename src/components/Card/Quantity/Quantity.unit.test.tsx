import { vi } from 'vitest'
import { fireEvent, render } from '../../../tests/utils'

import { Quantity } from './Quantity'

const props = {
  quantity: 3,
  maxQty: 10,
  setQuantity: vi.fn(),
  updateCart: vi.fn(),
}

describe('Quantity', () => {
  it('should render the symbols and the input with initial value', () => {
    const { getByTestId, getByRole } = render(<Quantity {...props} />)
    const minusSVG = getByTestId('svg-minus')
    const plusSVG = getByTestId('svg-plus')
    const input = getByRole('spinbutton')

    expect(minusSVG).toBeInTheDocument()
    expect(input).toBeInTheDocument()
    expect(plusSVG).toBeInTheDocument()
  })

  it('should allow user to increment quantity as long as the maximum is not reached', () => {
    const { getByTestId } = render(<Quantity {...props} />)
    const plusSvg = getByTestId('svg-plus')
    for (let i = props.quantity; i < props.maxQty; i++) {
      fireEvent.click(plusSvg)
    }
    expect(props.setQuantity).toHaveBeenCalledTimes(
      props.maxQty - props.quantity
    )
  })
})
