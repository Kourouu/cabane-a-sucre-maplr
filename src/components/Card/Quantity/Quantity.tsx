import { Minus } from '../../../ui/symbols/Minus';
import { Plus } from '../../../ui/symbols/Plus';
import { Input } from '../../Input/Input';

import * as S from './Quantity.styles';

type QuantityProps = {
  quantity: number,
  setQuantity: (quantity: number) => void
}

export const Quantity = ({quantity, setQuantity}: QuantityProps) => {

  return (
      <S.QuantityContainer>
        <Minus onClick={() => setQuantity(quantity - 1)} />
        <Input quantity={quantity} setQuantity={setQuantity} />
        <Plus onClick={() => setQuantity(quantity + 1)} />
      </S.QuantityContainer>
    )
}