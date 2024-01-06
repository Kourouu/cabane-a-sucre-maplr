import { createContext } from 'react';
import { CartContextType } from './shared/types';

export const CartContext = createContext<CartContextType>({cartItems: [], setCartItems: () => null});
