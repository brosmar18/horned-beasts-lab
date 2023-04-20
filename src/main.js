import React from "react";
import HornedBeast from "./HornedBeast";
import image_data from "./data/data.json";
import { Container, Row, Col } from "react-bootstrap";

class Main extends React.Component {
    render() {
        return (
            <>
                <Container>
                    <Row>
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
