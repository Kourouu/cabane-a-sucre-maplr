import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts';

import { usePostCart } from './Cart.hooks';

import { ItemInCart } from '../ItemInCart/ItemInCart';
import { Button } from '../../ui/Button/Button';

import * as S from './Cart.styles';

export const Cart = () => {
  const { cartItems } = useContext(CartContext);
  const mutation = usePostCart();
  const navigate = useNavigate();

  const validateCart = () => {
    const formattedCart = cartItems.map((cartItem) => ({
      productId: cartItem.id,
      qty: cartItem.qty,
    }));
    mutation.mutate(formattedCart);
  };

  return (
    <S.CartContainer>
      {cartItems.length === 0 && (
        <>{'Votre panier est vide. Et vos pancakes tristes :('}</>
      )}
      {mutation.isIdle &&
        cartItems.map((cartItem) => <ItemInCart currentItem={cartItem} />)}
      {mutation.isIdle && cartItems.length > 0 && (
        <S.ButtonsContainer>
          <Button
            text="Modifier mon panier"
            onClick={() => navigate('../products')}
          />
          <Button text="Valider le panier" onClick={validateCart} />
        </S.ButtonsContainer>
      )}
      {mutation.isPending && <>Validation du panier en cours</>}
      {mutation.isSuccess && <>Votre panier a bien ete validee</>}
    </S.CartContainer>
  );
};
