import { useContext } from 'react';

import { CartContext } from '../../contexts';

import { ItemInCart } from '../ItemInCart/ItemInCart';

import * as S from './Cart.styles';

export const Cart = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <S.CartContainer>
      {cartItems.map((cartItem) => (
        <ItemInCart currentItem={cartItem} />
      ))}
    </S.CartContainer>
  )
}