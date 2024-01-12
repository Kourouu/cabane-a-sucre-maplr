import { Card } from '../Card/Card'
import { useGetProducts } from './Products.hooks'

import * as S from './Products.styles'

export const Products = () => {
  const query = useGetProducts()

  return (
    <S.ProductsContainer>
      <S.CardsContainer>
        {query.isLoading && (
          <div>
            Un peu de patience, la recuperation de la liste de nos douceurs
            sucrees est en cours...
          </div>
        )}
        {query.data?.data.map((productOverview) => (
          <div key={productOverview.id} id={productOverview.id}>
            <Card product={productOverview} />
          </div>
        ))}
      </S.CardsContainer>
    </S.ProductsContainer>
  )
}
