import React from "react";
import HornedBeast from "./HornedBeast";
import image_data from "./data/data.json"; // import data from a JSON file
import { Container, Row, Col } from "react-bootstrap"; // import Bootstrap components for responsive layout

class Main extends React.Component {
    render() {
        return (
            <>
                <Container>
                    <Row>
                        {/* Map through the imported data and create a HornedBeast component for each object */}
                        {image_data.map((beast, index) => (
                            <Col key={index} xs={12} sm={6} md={4} lg={3} xl={2} className="p-2">
                                <HornedBeast
                                    title={beast.title}
                                    image_url={beast.image_url}
                                    description={beast.description}
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
