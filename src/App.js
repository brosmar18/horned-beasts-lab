// App.js
import './App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import SelectedBeast from './SelectedBeast'; // Import the SelectedBeast component
import image_data from './data/data.json'; // Import data from a JSON file

// Create the App component which is the main container for the application
class App extends React.Component {
  constructor(props) {
    super(props);
    // Initialize the state with selectedBeast set to null and showModal set to false
    this.state = {
      selectedBeast: null,
      showModal: false,
    };
  }

  // Define the onOpenModal function to update the selectedBeast and showModal state values
  onOpenModal = (beastTitle) => {
    this.setState({
      selectedBeast: beastTitle,
      showModal: true,
    });
  };

  // Define the onCloseModal function to close the modal by setting showModal to false
  onCloseModal = () => {
    this.setState({
      showModal: false,
    });
  };

  // Render the App component, which includes the Header, Main, Footer, and SelectedBeast components
  render() {
    // Find the selected beast object based on its title
    const selectedBeast = image_data.find(beast => beast.title === this.state.selectedBeast);

    return (
      <div className="App">
        <Header />
        {/* Pass the onOpenModal function to the Main component as a prop */}
        <Main onOpenModal={this.onOpenModal} />
        <Footer />
        {/* Pass the selected beast object, onCloseModal function, and showModal state value to the SelectedBeast component */}
        <SelectedBeast
          beast={selectedBeast}
          onClose={this.onCloseModal}
          showModal={this.state.showModal}
        />
      </div>
    );
  }
}

export default App;
