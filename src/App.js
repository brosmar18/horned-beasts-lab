import React from 'react';
import './css/App.css';
import { Container, Form } from 'react-bootstrap';
import Header from './Header';
import Main from './main';
import Footer from './Footer';
import SelectedBeast from './SelectedBeast';
import image_data from './data/data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: null,
      showModal: false,
      selectedHornCount: 0,
    };
  }

  onOpenModal = (beastTitle) => {
    this.setState({
      selectedBeast: beastTitle,
      showModal: true,
    });
  };

  onCloseModal = () => {
    this.setState({
      showModal: false,
    });
  };

  handleHornCountChange = (event) => {
    this.setState({
      selectedHornCount: parseInt(event.target.value),
    });
  };

  render() {
    const selectedBeast = image_data.find((beast) => beast.title === this.state.selectedBeast);
    return (
      <Container>
        <Header />
        <Form>
          <Form.Group controlId="formHornCount" className='form__group'>
            <Form.Label className='form__label'>Filter by Horn Count:</Form.Label>
            <Form.Control as="select" onChange={this.handleHornCountChange}>
              <option value={0}>All</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
              <option value={100}>One Hundred</option>
            </Form.Control>
          </Form.Group>
        </Form>
        <Main onOpenModal={this.onOpenModal} selectedHornCount={this.state.selectedHornCount} />
        <Footer />
        <SelectedBeast
          beast={selectedBeast}
          onClose={this.onCloseModal}
          showModal={this.state.showModal}
        />
      </Container>
    );
  }
}

export default App;
