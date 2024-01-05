import axios, {AxiosResponse} from 'axios';
import { ProductOverview } from '../shared/types';

export const getProducts = () => axios.get<object, AxiosResponse<ProductOverview[]>>('https://us-central1-maple-grove-349221.cloudfunctions.net/maplr-sugar-bush/products')
