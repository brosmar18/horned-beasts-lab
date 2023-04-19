import './App.css';
import React from 'react';
import Header from './header';
import Footer from './footer';
import Main from './main';



class App extends React.Component {


render (){
  console.log('our input/output')
  return(
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

}

export default App;
