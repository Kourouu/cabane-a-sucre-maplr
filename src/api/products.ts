import axios, {AxiosResponse} from 'axios';
import { ProductOverviewType } from '../shared/types';

export const getProducts = () => axios.get<object, AxiosResponse<ProductOverviewType[]>>('https://us-central1-maple-grove-349221.cloudfunctions.net/maplr-sugar-bush/products')

export const getProduct = (id?: string) => axios.get<object, AxiosResponse<ProductOverviewType>>(`https://us-central1-maple-grove-349221.cloudfunctions.net/maplr-sugar-bush/products/${id}`)
