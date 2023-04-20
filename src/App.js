import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

// Define App component and initialize state
class App extends React.Component {
  constructor(props) {
    super(props);
    // Set initial state of headerClicked to false
    this.state = {
      headerClicked: false,
    };
  }

  // Define function to handle click event on Header component
  handleClickHeader = () => {
    // Update state of headerClicked to the opposite of its current value
    this.setState((prevState) => ({
      headerClicked: !prevState.headerClicked,
    }));
  };

  // Render App component with Header, Main, and Footer components, as well as the color-change message if the header was clicked
  render() {
    const { headerClicked } = this.state;
    return (
      <div className="App">
        <Header onClickHeader={this.handleClickHeader} /> {/* Pass handleClickHeader function as a prop to Header component */}
        <Main />
        <Footer />
        {headerClicked && <div className="color-change-message">Header color changed!</div>} {/* Display color-change message if headerClicked state is true */}
      </div>
    );
  }
}

// Export App component for use in other files
export default App;
