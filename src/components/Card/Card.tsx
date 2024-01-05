import { useContext, useState } from 'react';
import { CartContext } from '../../contexts';
import { ProductDetailsType } from '../../shared/types';
import { getPropertyLabel } from '../../utils/getPropertyLabel';
import { Image } from '../Image/Image';

import * as S from './Card.styles';
import { Button } from '../../ui/Button/Button';
import { Quantity } from './Quantity/Quantity';

type CardProps = {
  product: ProductDetailsType,
  isActive?: boolean
}

export const Card = ({product, isActive = true}: CardProps) => {
  const [quantity, setQuantity] = useState(1);
  const { cartItems, setCartItems } = useContext(CartContext);
  console.log(cartItems)
  console.log(product)

  const updateItemQty = () => cartItems.map((item) => item.id === product.id ? 
  {
    ...item,
    qty: quantity
  } : item);
  

  const addNewItemToCart = () => ([
    ...cartItems,
    {
      ...product,
      qty: quantity
    }
  ]);

  const addToCart = () => {
    const itemIndexInCartArray = cartItems.findIndex((item) => item.id === product.id)

    setCartItems(itemIndexInCartArray > -1 ? updateItemQty() : addNewItemToCart())
}

  const entries = Object.entries(product).filter((entry) => entry[0] !== 'image' && entry[0] !== 'id');

  return (
    <>
      <S.ProductCardContainer
        to={isActive ? product.id : ''}
        isActive={isActive}
      >
        <Image 
          src={`data:image/png;base64, ${product.image}`}
          alt={`Photo de ${product.name}`}
        />
        <S.List>
          {entries.map((entry) => (<li key={entry[0]}>{getPropertyLabel(entry[0])} : {entry[1]}</li>))}
        </S.List>
      </S.ProductCardContainer>
      <Quantity quantity={quantity} setQuantity={setQuantity}/>
      <Button text='Ajouter au panier' onClick={() => addToCart()}/>
    </>
    )
}