import React from "react";
import HornedBeast from "./HornedBeast";
import image_data from "./data/data.json";
import { Container, Row, Col } from "react-bootstrap";

class Main extends React.Component {
    render() {
        const filteredData =
            this.props.selectedHornCount === 0
                ? image_data
                : image_data.filter((beast) => beast.horns === this.props.selectedHornCount);

        return (
            <>
                <Container>
                    <Row>
                        {filteredData.map((beast, index) => (
                            <Col key={index} xs={12} sm={6} md={4} lg={3} xl={2} className="p-2">
                                <HornedBeast
                                    title={beast.title}
                                    image_url={beast.image_url}
                                    description={beast.description}
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
