import { vi } from 'vitest'
import { fireEvent, render } from '../../../tests/utils';
import { Quantity } from './Quantity';

const props = {
  quantity: 3,
  maxQty: 10,
  setQuantity: vi.fn(),
  updateCart: vi.fn()
};

describe('Quantity', () => {
  it('should render the symbols and the input', () => {
    const { getByTestId, getByRole } = render(<Quantity {...props} />);

    const minusSVG = getByTestId('svg-minus');
    const plusSVG = getByTestId('svg-plus');
    const input = getByRole('spinbutton');
    fireEvent.click(plusSVG);
    expect(props.setQuantity).toHaveBeenCalledTimes(1)
    expect(minusSVG).toBeTruthy();
    expect(input).toBeTruthy();
    expect(plusSVG).toBeTruthy();
  });
});
