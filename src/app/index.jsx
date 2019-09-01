import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes.jsx';
import Header from '../components/commons/Header/Header.jsx';
import Footer from '../components/commons/Footer/Footer.jsx';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes />
    <Footer />
  </BrowserRouter>
);

export default App;
