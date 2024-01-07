import { useQuery } from '@tanstack/react-query';
import { getProduct } from '../../api/products';
import { useParams } from 'react-router-dom';

export const useGetProduct = () => {
    const { id } = useParams();
    return useQuery({
    queryKey: ['products', id],
    queryFn: () => getProduct(id),
  });
}