import { useContext } from 'react';
import { useMutation } from '@tanstack/react-query';
import { postCart } from '../../api/cart';
import { CartContext } from '../../contexts';

export const usePostCart = () => {
    const { setCartItems } = useContext(CartContext);
    const mutation = useMutation({
    mutationFn: postCart,
    onSuccess: () => setCartItems([]),
    onError: (error) => console.log(error),
  });

  return mutation;
}