export interface ProductOverviewType {
  id: string,
  image: string,
  maxQty: string,
  name: string,
  price: string,
  type: string,
}

export interface CartItemType extends ProductOverviewType {
  qty: number;
}

export type CartContextType = {
  cartItems: CartItemType[],
  setCartItems: (cartItems: CartItemType[]) => void
}

export type CartPayloadType = {
  productId: string,
  qty: number
}[]