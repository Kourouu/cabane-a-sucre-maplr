import { ThemeProvider } from '@emotion/react';
import { theme } from './theme/theme';
import * as S from './App.styles';
import { Menu } from './components/Menu/Menu';


function App() {

  return (
    <ThemeProvider theme={theme}>
      <S.Container>
        <Menu />
      </S.Container>
    </ThemeProvider>
  )
}

export default App
