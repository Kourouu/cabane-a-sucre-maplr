const labels: {[key: string]: string} = {
  name: 'Nom',
  price: 'Prix',
  maxQty: 'Quantite maximum',
  type: 'Type',
  stock: 'Quantite disponible',
  description: 'Description'
}
export const getPropertyLabel = (property: string) => labels[property] as string;