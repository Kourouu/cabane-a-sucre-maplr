import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom'

import { getProduct } from '../../api/getProduct';

import { Button } from '../../ui/Button/Button';
import { Card } from '../Card/Card';

import * as S from './ProductDetails.styles';

export const ProductDetails = (() => {
  const { id } = useParams();
  const { data } = useQuery({ queryKey: ['products', id], queryFn: () => getProduct(id) })
  const productDetails = data?.data

  return (
    productDetails && (
      <div>
        <S.ProductDetailsContainer>
          <Button text='Retourner au catalogue' />
            <Card
              product={productDetails}
              isActive={false}
            />
        </S.ProductDetailsContainer>
      </div>
    )
  )
})