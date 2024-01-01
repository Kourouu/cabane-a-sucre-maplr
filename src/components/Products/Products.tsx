import { useQuery } from '@tanstack/react-query';

import { getProducts } from '../../api/getProducts';

import { Product } from './Product/Product';

import * as S from './Products.styles';

export const Products = () => {
  const { data } = useQuery({ queryKey: ['products'], queryFn: getProducts })

  console.log(data?.data)

  return (
    <S.ProductsContainer>
      <S.Video src='https://maplr.co/wp-content/uploads/2023/02/welcome-maplr-1080.mp4' autoPlay loop muted />
      <S.CardsContainer>
      {data?.data.map((item) => <Product item={item} />)}
      </S.CardsContainer>
    </S.ProductsContainer>
  )
}