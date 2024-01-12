import { getProducts, getProduct } from './products'

// TODO: mock API call (cf. https://vitest.dev/guide/mocking.html#requests)

describe('fetch products', () => {
    it('should get all products', async () => {
        const { data } = await getProducts();
        expect(data).toBeDefined()
    })
    it('should get product details', async () => {
        const { data } = await getProduct('3e7f36a6-8c58-4fbb-83a8-f930bba362e9');
        expect(data).toBeDefined()
    })
  })
  