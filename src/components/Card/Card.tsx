import { useContext, useState } from 'react';

import { CartContext } from '../../contexts';

import { ProductOverviewType } from '../../shared/types';

import { getPropertyLabel } from '../../utils/getPropertyLabel';

import { Image } from '../Image/Image';
import { Quantity } from './Quantity/Quantity';

import * as S from './Card.styles';

type CardProps = {
  product: ProductOverviewType;
  active?: boolean;
};

export const Card = ({ product, active = true }: CardProps) => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const currentItemInCart = cartItems.find((item) => item.id === product.id);

  const productWithQuantity = {
    ...product,
    qty: currentItemInCart?.qty ?? 0,
  };

  const [quantity, setQuantity] = useState(currentItemInCart?.qty || 1);

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

  const updateCart = () => {
    setCartItems(
      itemIndexInCartArray > -1 ? updateItemQty() : addNewItemToCart()
    );
  };

  const entries = Object.entries(product).filter(
    (entry) => entry[0] !== 'image' && entry[0] !== 'id'
  );

  return (
    <>
      <S.ProductCardContainer to={active ? product.id : ''} active={active}>
        <Image
          src={`data:image/png;base64, ${product.image}`}
          alt={`Photo de ${product.name}`}
        />
        <S.List>
          {entries.map((entry) => (
            <li key={entry[0]}>
              {getPropertyLabel(entry[0])} : {entry[1]}
            </li>
          ))}
        </S.List>
      </S.ProductCardContainer>
      <Quantity
        product={productWithQuantity}
        quantity={quantity}
        setQuantity={setQuantity}
        updateCart={updateCart}
      />
    </>
  );
};
