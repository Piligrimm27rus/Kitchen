import './App.css';
import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/Footer';
import MainPage from './components/pages/main-page/MainPage';


export default function App() {
  return (
    <div>
      <Header />
      <MainPage />
      <Footer/>
    </div>
  );
}
