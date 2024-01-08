import { render } from '../../../tests/utils';
import { Quantity } from './Quantity';

const props = {
  quantity: 3,
  maxQty: 10,
  setQuantity: () => null,
  updateCart: () => null,
};

describe('Quantity', () => {
  it('should render the symbols and the input', () => {
    const { getByTestId, getByRole } = render(<Quantity {...props} />);

    const minusSVG = getByTestId('svg-minus');
    const plusSVG = getByTestId('svg-plus');
    const input = getByRole('spinbutton');

    expect(minusSVG).toBeTruthy();
    expect(input).toBeTruthy();
    expect(plusSVG).toBeTruthy();
  });
});
