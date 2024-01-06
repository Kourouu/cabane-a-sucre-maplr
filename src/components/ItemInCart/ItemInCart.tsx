import { useContext } from 'react';

import { CartContext } from '../../contexts';

import { CartItemType } from '../../shared/types';

import { Image } from '../Image/Image';

import * as S from './ItemInCart.styles';

export const ItemInCart = ({ currentItem }: { currentItem: CartItemType }) => {
  const { cartItems } = useContext(CartContext);
  console.log(cartItems);
  console.log(currentItem);

  return (
    <S.ItemInCartContainer>
      <Image
        initialWidth
        src={`data:image/png;base64, ${currentItem.image}`}
        alt={`Photo de ${currentItem.name}`}
      />
      <div>
        <div>{currentItem.name}</div>
        <div>
          Stock restant : {parseInt(currentItem.maxQty, 10) - currentItem.qty}
        </div>
        <div>Prix unitaire : {currentItem.price}$</div>
        <div>
          Prix total avant taxes :{' '}
          {parseInt(currentItem.price, 10) * currentItem.qty}$
        </div>
      </div>
    </S.ItemInCartContainer>
  );
};
