import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom'

import { getProduct } from '../../api/getProduct';

import { Card } from '../Card/Card';
import { Link } from '../../ui/Link/Link';

import * as S from './ProductDetails.styles';


export const ProductDetails = (() => {
  const { id } = useParams();
  const { data } = useQuery({ queryKey: ['products', id], queryFn: () => getProduct(id) })
  const productDetails = data?.data

  return (
    productDetails && (
      <div>
        <S.ProductDetailsContainer>
          <Link to={'../products'}>Retourner au catalogue</Link>
            <Card
              product={productDetails}
              active={false}
            />
        </S.ProductDetailsContainer>
      </div>
    )
  )
})