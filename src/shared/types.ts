export interface ProductOverview {
  id: string,
  image: string,
  maxQty: number,
  name: string,
  price: string,
  type: string,
}

export type ProductDetails = Omit<ProductOverview, 'maxQty'> & {
  stock: number,
}
