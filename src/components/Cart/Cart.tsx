import { useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';

import { CartContext } from '../../contexts';

import { CartPayloadType } from '../../shared/types';

import { ItemInCart } from '../ItemInCart/ItemInCart';
import { Button } from '../../ui/Button/Button';

import * as S from './Cart.styles';


export const Cart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const mutation = useMutation(
    { 
      mutationFn: (payload: CartPayloadType) => axios.post('https://us-central1-maple-grove-349221.cloudfunctions.net/maplr-sugar-bush/order', payload),
      onSuccess: () => setCartItems([]),
      onError: (error) => console.log(error)
    })

  const validateCart = () => {
    const formattedCart = cartItems.map((cartItem) => ({
      productId: cartItem.id,
      qty: cartItem.qty
    }))
    mutation.mutate(formattedCart)
  }

  console.log(mutation.status)

  return (
    <S.CartContainer>
      {cartItems.length === 0 && (<>{'Votre panier est vide. Et vos pancakes tristes :('}</>)}
      {mutation.isIdle && (
        cartItems.map((cartItem) => (
          <ItemInCart currentItem={cartItem} />
        )))}
      {mutation.isIdle && cartItems.length > 0 && (
        <S.ButtonsContainer>
        <Button
          text='Modifier mon panier'
          onClick={() => navigate('../products')}
        />
        <Button
          text='Valider le panier'
          onClick={validateCart}
        />
      </S.ButtonsContainer>
      )}
      {mutation.isPending && (<>Validation du panier en cours</>)}
      {mutation.isSuccess && (<>Votre panier a bien ete validee</>)}
    </S.CartContainer>
  )
}

