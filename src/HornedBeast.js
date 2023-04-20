import React from "react";

class HornedBeast extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <section className="horned-beast">
          <h2 className="horned-beast__title">Beast Name: {this.props.title}</h2>
          <img
            src={this.props.image_url}
            alt={this.props.title}
            className="horned-beast__image"
          />
          <figcaption className="horned-beast__description">
            Description: {this.props.description}
          </figcaption>
        </section>
      </>
    );
  }
}

export default HornedBeast;
