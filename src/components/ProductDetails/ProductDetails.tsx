import { useGetProduct } from './ProductsDetails.hooks'

import { Card } from '../Card/Card'
import { Button } from '../../ui/Button/Button'

import * as S from './ProductDetails.styles'
import { useNavigate } from 'react-router-dom'

export const ProductDetails = () => {
  const navigate = useNavigate()
  const query = useGetProduct()
  const productDetails = query.data?.data

  return (
    productDetails && (
      <div>
        <S.ProductDetailsContainer>
          <Button
            text="Retourner au catalogue"
            onClick={() => navigate('../products')}
          />
          <Card product={productDetails} active={false} />
        </S.ProductDetailsContainer>
      </div>
    )
  )
}
