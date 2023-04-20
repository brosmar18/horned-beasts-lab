import React from "react";

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
    };
  }

  increaseFavorites = () => {
    this.setState({ favorites: this.state.favorites + 1 });
  };

  render() {
    return (
      <>
        <div className="horned-beast">
          <div className="horned-beast__content">
            <h2 className="horned-beast__title">Beast Name: {this.props.title}</h2>
            <img className="horned-beast__image" src={this.props.image_url} alt={this.props.title} />
            <figcaption className="horned-beast__description">Description: {this.props.description}</figcaption>
            <p>Click the button to favorite this beast:</p>
            <button onClick={this.incrementFavoriteCounter}>
              ❤️ Favorite {this.state.favoriteCounter}
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default HornedBeast;
