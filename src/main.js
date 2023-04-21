import React from "react";
import HornedBeast from "./HornedBeast";
import image_data from "./data/data.json"; // Import data from a JSON file
import { Container, Row, Col } from "react-bootstrap"; // Import Bootstrap components for responsive layout

// Create the Main component which is responsible for rendering the grid of HornedBeast components
class Main extends React.Component {
    render() {
        return (
            <>
                <Container>
                    <Row>
                        {/* Map through the imported data and create a HornedBeast component for each object */}
                        {image_data.map((beast, index) => (
                            // Use Bootstrap's Col component to create a responsive grid layout
                            <Col key={index} xs={12} sm={6} md={4} lg={3} xl={2} className="p-2">
                                {/* Create a HornedBeast component and pass the necessary props for each beast */}
                                <HornedBeast
                                    title={beast.title}
                                    image_url={beast.image_url}
                                    description={beast.description}
                                    // Pass down the onOpenModal function from App component to HornedBeast component
                                    onOpenModal={this.props.onOpenModal}
                                />
                            </Col>
                        ))}
                    </Row>
                </Container>
            </>
        );
    }
}

export default Main;
