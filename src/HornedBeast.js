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
        <section className="horned-beast">
          <h2 className="horned-beast__title">Beast Name: {this.props.title}</h2>
          <img
            className="horned-beast__image"
            src={this.props.image_url}
            alt={this.props.title}
          />
          <figcaption className="horned-beast__description">Description: {this.props.description}</figcaption>
          <p className="horned-beast__favorites">
            Favorites: {this.state.favorites}
          </p>
          <p className="horned-beast__instruction">
            Click the button below to favorite this beast!
          </p>
          <button className="horned-beast__favorite-btn" onClick={this.increaseFavorites}>
            <span role="img" aria-label="heart">
              ❤️
            </span>{" "}
            Favorite
          </button>
        </section>
      </>
    );
  }
}

export default HornedBeast;
