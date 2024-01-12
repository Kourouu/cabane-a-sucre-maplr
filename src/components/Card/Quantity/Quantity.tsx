import { Button } from '../../../ui/Button/Button'
import { Minus } from '../../../ui/symbols/Minus'
import { Plus } from '../../../ui/symbols/Plus'

import * as S from './Quantity.styles'

type QuantityProps = {
  maxQty: number
  quantity: number
  setQuantity: (quantity: number) => void
  updateCart: () => void
}

export const Quantity = ({
  quantity,
  maxQty,
  setQuantity,
  updateCart,
}: QuantityProps) => {
  const isMoreAvailable = maxQty > quantity

  const handleUserInput = (value: string) => {
    console.log(value)
    const toNumber = parseInt(value, 10)
    console.log(toNumber)

    setQuantity(
      isNaN(toNumber) ? 0 : toNumber < maxQty ? parseInt(value) : maxQty
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
          max={maxQty}
          onChange={(e) => handleUserInput(e.target.value)}
          value={quantity}
        />
        <Plus
          onClick={() => (isMoreAvailable ? setQuantity(quantity + 1) : null)}
          isActive={isMoreAvailable}
        />
      </S.InputContainer>
      <Button text="Ajouter au panier" onClick={updateCart} />
    </S.QuantityContainer>
  )
}
