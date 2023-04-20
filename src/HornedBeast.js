import React from "react";

class HornedBeast extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <section>
          <h2>Beast Name: {this.props.title}</h2>
          <img src={this.props.image_url} alt={this.props.title} />
          <figcaption>Description: {this.props.description}</figcaption>
        </section>
      </>
    );
  }
}

export default HornedBeast;
