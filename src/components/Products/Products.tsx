import { useQuery } from '@tanstack/react-query';

import { getProducts } from '../../api/getProducts';

import { Card } from '../Card/Card';

import * as S from './Products.styles';

export const Products = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts,
  });

  return (
    <S.ProductsContainer>
      <S.CardsContainer>
        {isLoading && (
          <div>
            Un peu de patience, la recuperation de la liste de nos douceurs
            sucrees est en cours...
          </div>
        )}
        {data?.data.map((productOverview) => (
          <div key={productOverview.id}>
            <Card product={productOverview} />
          </div>
        ))}
      </S.CardsContainer>
    </S.ProductsContainer>
  );
};
