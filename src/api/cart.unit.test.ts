import { postCart } from './cart'

// TODO: mock API call (cf. https://vitest.dev/guide/mocking.html#requests)

const payload = [{
    productId: '3e7f36a6-8c58-4fbb-83a8-f930bba362e9',
    name: 'Organic clear Maple syrup 250 ml',
    image: 'image',
    price: '7.99',
    qty: 3,
    type: 'CLEAR'
}]

describe('fetch products', () => {
    it('should post cart', async () => {
        const response = await postCart(payload)
        expect(response.status).toBe(202)
    })
  })
  