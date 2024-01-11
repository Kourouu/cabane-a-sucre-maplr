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
  const { getByTestId, getByRole } = render(<Quantity {...props} />)
  const minusSVG = getByTestId('svg-minus')
  const plusSVG = getByTestId('svg-plus')
  const input = getByRole('spinbutton')

  it('should allow user to increment quantity as long as the maximum is not reached', () => {
    for (let i = props.quantity; i < props.maxQty; i++) {
      fireEvent.click(plusSVG)
    }
    expect(props.setQuantity).toHaveBeenCalledTimes(
      props.maxQty - props.quantity
    )
  })

  it('should render the symbols and the input with initial value', () => {
    expect(minusSVG).toBeTruthy()
    expect(input).toBeTruthy()
    expect(plusSVG).toBeTruthy()
  })
})
