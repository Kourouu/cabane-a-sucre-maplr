export interface ProductOverviewType {
  id: string,
  image: string,
  maxQty: number,
  name: string,
  price: string,
  type: string,
}

export type ProductDetailsType = Omit<ProductOverviewType, 'maxQty'> & {
  stock: number,
}

export interface CartItemType extends ProductDetailsType {
  qty: number;
}

export type CartContextType = {
  cartItems: CartItemType[],
  setCartItems: (cartItems: CartItemType[]) => void
}