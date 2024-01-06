import { CartItemType } from '../../../shared/types';

import { Button } from '../../../ui/Button/Button';
import { Minus } from '../../../ui/symbols/Minus';
import { Plus } from '../../../ui/symbols/Plus';

import * as S from './Quantity.styles';

type QuantityProps = {
  product?: CartItemType,
  quantity: number,
  setQuantity: (quantity: number) => void,
  updateCart: () => void
}

export const Quantity = ({quantity, product, setQuantity, updateCart}: QuantityProps) => {
  console.log(product?.qty)
  console.log(quantity)
  return (
    <S.QuantityContainer>
      <S.InputContainer>
        <Minus onClick={() => setQuantity(quantity - 1)} />
        <S.Input
          type='number'
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          value={quantity}
        />
          <Plus onClick={() => setQuantity(quantity + 1)} />
        </S.InputContainer>
        <Button text='Ajouter au panier' onClick={updateCart}/>
    </S.QuantityContainer>
  )
}