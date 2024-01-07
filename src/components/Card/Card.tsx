import { useState } from 'react';

import { ProductOverviewType } from '../../shared/types';

import { getPropertyLabel } from './getPropertyLabel';

import { Image } from '../../ui/Image/Image';
import { Quantity } from './Quantity/Quantity';

import * as S from './Card.styles';
import { useGetCardProps, useUpdateCart } from './Card.hooks';

type CardProps = {
  product: ProductOverviewType;
  active?: boolean;
};

export const Card = ({ product, active = true }: CardProps) => {
  const { isCurrentItemInCart, productWithQuantity } = useGetCardProps(product);
  const [quantity, setQuantity] = useState(
    isCurrentItemInCart ? productWithQuantity.qty : 1
  );
  const { updateCart } = useUpdateCart(product, quantity);

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
