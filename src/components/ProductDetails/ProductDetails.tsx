import { useGetProduct } from './ProductsDetails.hooks';

import { Card } from '../Card/Card';
import { Link } from '../../ui/Link/Link';

import * as S from './ProductDetails.styles';

export const ProductDetails = () => {
  const query = useGetProduct();
  const productDetails = query.data?.data;

  return (
    productDetails && (
      <div>
        <S.ProductDetailsContainer>
          <Link to={'../products'}>Retourner au catalogue</Link>
          <Card product={productDetails} active={false} />
        </S.ProductDetailsContainer>
      </div>
    )
  );
};
