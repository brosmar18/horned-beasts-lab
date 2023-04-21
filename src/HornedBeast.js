import React from "react";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    // Set initial state for favorites
    this.state = {
      favorites: 0,
    };
  }

  // Define function to increase favorites count when button is clicked
  increaseFavorites = () => {
    this.setState({ favorites: this.state.favorites + 1 });
  };

  // Define function to handle click event on the image
  handleClickImage = () => {
    // Call onOpenModal function passed from parent with the beast's title as argument
    this.props.onOpenModal(this.props.title);
  }

  render() {
    return (
      <div className="horned-beast">
        <div className="horned-beast__content">
          {/* Display the beast's title */}
          <h2 className="horned-beast__title">Beast Name: {this.props.title}</h2>
          {/* Display the beast's image with an onClick event */}
          <img
            className="horned-beast__image"
            src={this.props.image_url}
            alt={this.props.title}
            onClick={this.handleClickImage}
          />
          {/* Display the beast's description */}
          <figcaption className="horned-beast__description">Description: {this.props.description}</figcaption>
          {/* Display a button to favorite the beast */}
          <p>Click the button to favorite this beast:</p>
          <button onClick={this.increaseFavorites}>
            <span role="img" aria-label="heart symbol">❤️</span> Favorite {this.state.favorites}
          </button>
        </div>
      </div>
    );
  }
}

export default HornedBeast;
