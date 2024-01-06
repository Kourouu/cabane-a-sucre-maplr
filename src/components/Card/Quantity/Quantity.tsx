
import { CartItemType } from '../../../shared/types';

import { Button } from '../../../ui/Button/Button';
import { Minus } from '../../../ui/symbols/Minus';
import { Plus } from '../../../ui/symbols/Plus';

import * as S from './Quantity.styles';

type QuantityProps = {
  product: CartItemType,
  quantity: number,
  setQuantity: (quantity: number) => void,
  updateCart: () => void
}

export const Quantity = ({quantity, product, setQuantity, updateCart}: QuantityProps) => {
  const isMoreAvailable = parseInt(product.maxQty, 10) > quantity
  return (
    product && (<S.QuantityContainer>
      <S.InputContainer>
        <Minus
          onClick={() => quantity > 1 ? setQuantity(quantity - 1) : null}
          isActive={quantity > 1}
        />
        <S.Input
          type='number'
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          value={quantity}
        />
          <Plus 
            onClick={() => isMoreAvailable ? setQuantity(quantity + 1) : null} 
            isActive={isMoreAvailable}
          />
        </S.InputContainer>
        <Button text='Ajouter au panier' onClick={updateCart}/>
    </S.QuantityContainer>)
  )
}