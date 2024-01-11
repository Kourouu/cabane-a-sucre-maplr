import { CartItemType } from '../../shared/types'

import { Image } from '../../ui/Image/Image'

import * as S from './ItemInCart.styles'

export const ItemInCart = ({ currentItem }: { currentItem: CartItemType }) => {
  return (
    <S.ItemInCartContainer>
      <Image
        initialWidth
        src={`data:image/png;base64, ${currentItem.image}`}
        alt={`Photo de ${currentItem.name}`}
      />
      <div>
        <div>{currentItem.name}</div>
        <div>Prix unitaire : {currentItem.price}$</div>
        <div>Quantite : {currentItem.qty}</div>
        <div>
          Prix total avant taxes :{' '}
          {(parseFloat(currentItem.price) * currentItem.qty).toFixed(2)}$
        </div>
        <div>
          Stock supplementaire disponible :{' '}
          {parseInt(currentItem.maxQty, 10) - currentItem.qty}
        </div>
      </div>
    </S.ItemInCartContainer>
  )
}
