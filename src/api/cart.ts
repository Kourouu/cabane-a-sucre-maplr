import axios from 'axios';
import { CartPayloadType } from '../shared/types';

export const postCart = (payload: CartPayloadType) => axios.post('https://us-central1-maple-grove-349221.cloudfunctions.net/maplr-sugar-bush/order', payload)