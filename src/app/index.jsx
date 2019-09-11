import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routes from './routes.jsx';
import Footer from '../components/commons/Footer/Footer.jsx';

const App = () => (
  <BrowserRouter>
    <ToastContainer autoClose={3000} hideProgressBar style={{ fontSize: '1.6rem' }} />
    <Routes />
    <Footer />
  </BrowserRouter>
);

export default App;
