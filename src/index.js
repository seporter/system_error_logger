import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import theme from './src/theme';
import GlobalStyle from './src/globalStyle';
import Home from './src/Home';
import About from './src/About';
import Contact from './src/Contact';
import Header from './src/Header';
import Footer from './src/Footer';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </Router>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));