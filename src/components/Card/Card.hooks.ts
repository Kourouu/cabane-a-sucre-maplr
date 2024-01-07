import { useContext } from 'react';
import { CartContext } from '../../contexts';
import { ProductOverviewType } from '../../shared/types';

export const useGetCardProps = (product: ProductOverviewType) => {
  const { cartItems } = useContext(CartContext);
  const isCurrentItemInCart = !!cartItems.find((item) => item.id === product.id)
    const currentItemInCart = cartItems.find((item) => item.id === product.id);

    const productWithQuantity = {
    ...product,
    qty: currentItemInCart?.qty ?? 0,
  };

  return {
    isCurrentItemInCart,
    productWithQuantity
  }
}

export const useUpdateCart = (product: ProductOverviewType, quantity: number) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const itemIndexInCartArray = cartItems.findIndex(
    (item) => item.id === product.id
  );

  const updateItemQty = () =>
    cartItems.map((item) =>
      item.id === product.id
        ? {
            ...item,
            qty: quantity,
          }
        : item
    );

  const addNewItemToCart = () => [
    ...cartItems,
    {
      ...product,
      qty: quantity,
    },
  ];

  const updateCart = () => setCartItems(itemIndexInCartArray > -1 ? updateItemQty() : addNewItemToCart())

  return { updateCart }
}