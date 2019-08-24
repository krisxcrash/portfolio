import React from 'react';
import {ThemeProvider} from 'styled-components'

import logo from './logo.svg';
import './App.css';
import Home from './components/screens/Home';
import theme from './shared/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home />
    </ThemeProvider>
  )
}

export default App;
