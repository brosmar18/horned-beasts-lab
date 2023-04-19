import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from './header';
import Footer from './footer';
class App extends React.Component {


render (){
  console.log('our input/output')
  return(
    <>
      <Header />
      <Footer />
    </>
  );
}

}

export default App;
