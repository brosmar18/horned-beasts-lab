import React from 'react';
import { Modal, Button, Image } from 'react-bootstrap';

class SelectedBeast extends React.Component {
    render() {
        const { showModal, beast, onClose } = this.props;

        // Render the Modal only if the beast is not null
        return (
            beast && (
                <Modal show={showModal} onHide={onClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>{beast.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Image src={beast.image_url} alt={beast.title} fluid />
                        <p>{beast.description}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={onClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            )
        );
    }
}

export default SelectedBeast;
