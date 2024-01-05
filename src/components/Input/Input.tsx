type QuantityProps = {
  quantity: number,
  setQuantity: (quantity: number) => void
}
export const Input = ({quantity, setQuantity}: QuantityProps) => (<input type='number' onChange={(e) => setQuantity(parseInt(e.target.value))} value={quantity}/>)