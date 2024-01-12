import { ProductOverviewType } from '../../../shared/types'
import { Button } from '../../../ui/Button/Button'
import { Minus } from '../../../ui/symbols/Minus'
import { Plus } from '../../../ui/symbols/Plus'

import * as S from './Quantity.styles'

type QuantityProps = {
  product: ProductOverviewType & { qty: number }
  quantity: number
  setQuantity: (quantity: number) => void
  updateCart: () => void
}

export const Quantity = ({
  product,
  quantity,
  setQuantity,
  updateCart,
}: QuantityProps) => {
  const maxQtyAsNumber = parseInt(product.maxQty)

  const isMoreAvailable = maxQtyAsNumber > quantity
  const isCurrentInputEqualsToQtyInCart =
    product.qty === 0 || product.qty == quantity
  const handleUserInput = (value: string) => {
    const toNumber = parseInt(value, 10)
    setQuantity(
      isNaN(toNumber)
        ? 0
        : toNumber < maxQtyAsNumber
        ? parseInt(value)
        : maxQtyAsNumber
    )
  }

  return (
    <S.QuantityContainer>
      <S.InputContainer>
        <Minus
          onClick={() => (quantity > 1 ? setQuantity(quantity - 1) : null)}
          isActive={quantity > 1}
        />
        <S.Input
          type="number"
          min={1}
          max={maxQtyAsNumber}
          onChange={(e) => handleUserInput(e.target.value)}
          value={quantity}
        />
        <Plus
          onClick={() => (isMoreAvailable ? setQuantity(quantity + 1) : null)}
          isActive={isMoreAvailable}
        />
      </S.InputContainer>
      <Button
        text={
          isCurrentInputEqualsToQtyInCart
            ? 'Ajouter au panier'
            : 'Modifier la quantite'
        }
        onClick={updateCart}
      />
    </S.QuantityContainer>
  )
}
