import { useQuery } from '@tanstack/react-query';

import { getProducts } from '../../api/getProducts';

import { Card } from '../Card/Card';

import * as S from './Products.styles';

export const Products = () => {
  const { data } = useQuery({ queryKey: ['products'], queryFn: getProducts })

  return (
    <S.ProductsContainer>
      {/* <S.Video
        src='https://maplr.co/wp-content/uploads/2023/02/welcome-maplr-1080.mp4'
        autoPlay
        loop
        muted
      /> */}
      <S.CardsContainer>
      {data?.data.map((productOverview) => <Card product={productOverview} />)}
      </S.CardsContainer>
    </S.ProductsContainer>
  )
}