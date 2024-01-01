import { theme } from './theme/theme';
import './App.css';
import { ThemeProvider } from '@emotion/react';

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <div style={{
          color: theme.colors.main,
          flexGrow: 1
          }}>Le theme a bien ete cree</div>
      </ThemeProvider>
    </>
  )
}

export default App
