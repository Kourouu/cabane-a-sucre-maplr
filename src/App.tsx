import { ThemeProvider } from '@emotion/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { theme } from './theme/theme';
import * as S from './App.styles';

import { Home } from './components/Home/Home';
import { Menu } from './components/Menu/Menu';
import { Products } from './components/Products/Products';
import { Product } from './components/Products/Product/Product';
import { Cart } from './components/Cart/Cart';


function App() {

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <S.Container>
            <Menu />
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/products' element={<Products />} />
              <Route path='/products/:id' element={<Product />} />
              <Route path='/cart' element={<Cart />} /> 
            </Routes>
          </S.Container>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default App
