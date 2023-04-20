import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';



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
