import { ProductDetails, ProductOverview } from '../../shared/types';
import { getPropertyLabel } from '../../utils/getPropertyLabel';
import { Image } from '../Image/Image';

import * as S from './Card.styles';

type CardProps = {
  product: ProductOverview | ProductDetails,
  isActive?: boolean
}

export const Card = ({product, isActive = true}: CardProps) => {

  const entries = Object.entries(product).filter((entry) => entry[0] !== 'image' && entry[0] !== 'id');

  return (
      <S.ProductCardContainer
        to={isActive ? product.id : ''}
        isActive={isActive}
      >
      <Image 
        src={`data:image/png;base64, ${product.image}`}
        alt={`Photo de ${product.name}`}
      />
      <S.List>
        {entries.map((entry) => (<li>{getPropertyLabel(entry[0])} : {entry[1]}</li>))}
      </S.List>
     </S.ProductCardContainer>
    )
}