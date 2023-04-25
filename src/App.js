// App.js
import './css/App.css';
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import SelectedBeast from './SelectedBeast'; // Import the SelectedBeast component
import image_data from './data/data.json'; // Import data from a JSON file
import { Form } from 'react-bootstrap';


// Create the App component which is the main container for the application
class App extends React.Component {
  constructor(props) {
    super(props);
    // Initialize the state with selectedBeast set to null and showModal set to false
    this.state = {
      selectedBeast: null,
      showModal: false,
      selectedHornCount: 0,
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

  // Handle changes to seleected horn count
  handleHornCountChange = (event) => {
    this.setState({
      selectedHornCount: event.target.value,
    });
  }

  // Render the App component, which includes the Header, Main, Footer, and SelectedBeast components
  render() {
    const selectedBeast = image_data.find(beast => beast.title === this.state.selectedBeast);
    return (
      <div className="App">
        <Header />
        <Form.Group controlId="formHornCount">
          <Form.Label>Filter by Horn Count:</Form.Label>
          <Form.Control as="select" onChange={this.handleHornCountChange}>
            <option value={0}>All</option>
            <option value={1}>One</option>
            <option value={2}>Two</option>
            <option value={3}>Three</option>
            <option value={100}>100</option>
          </Form.Control>
        </Form.Group>
        <Main onOpenModal={this.onOpenModal} selectedHornCount={this.state.selectedHornCount} />
        <Footer />
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
