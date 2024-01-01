import * as S from './Products.styles';
import { Product } from './Product/Product';

export const Products = () => {
  return (
    <S.ProductsContainer>
      <div>Retrouvez toute la gamme de sirop d'erable proposee par Maplr sur cette page</div>
      <Product />
    </S.ProductsContainer>
  )
}