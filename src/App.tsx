import React from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

import usePersistedState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import Header from './components/Header';

import GloblalStyle from './styles/global';

function App(): JSX.Element {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light);
  }

  return (
    <ThemeProvider theme={theme}>
      <GloblalStyle />
      <Header toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default App;
