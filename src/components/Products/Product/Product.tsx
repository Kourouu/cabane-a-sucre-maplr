import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom'

import { Item } from '../../../shared/types';
import { getProduct } from '../../../api/getProduct';

import * as S from './Product.styles';

type ProductProps = {
  item?: Item
}

export const Product = ({item}: ProductProps) => {
  const { id } = useParams();
  console.log(id)
  const { data } = useQuery({ queryKey: ['products', id], queryFn: () => getProduct(id) })

  console.log(data)

  return (
    item && (
      <S.ProductContainer to={item.id}>
      <S.Image src={`data:image/png;base64, ${item.image}`} alt={`Photo de ${item.name}`}/>
      <ul>
        <li>Nom : {item.name}</li>
        <li>Type : {item.type}</li>
        <li>Prix : {item.price}</li>
        <li>Quantite maximum : {item.maxQty}</li>
      </ul>
     </S.ProductContainer>
    )
  )
}