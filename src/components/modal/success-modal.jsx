import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { NavLink } from 'react-router-dom';

export default function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            size="l"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Title id="contained-modal-title-vcenter">
                Successfully submitted!!!
            </Modal.Title>
            <Modal.Body>
                <p>
                    You can check result in leaderboard
                </p>
            </Modal.Body>
            <Modal.Footer>
                <NavLink to="/">
                    <Button>Home</Button>
                </NavLink>
                <NavLink to="/leaderboard">
                    <Button>Leaderboard</Button>
                </NavLink>
            </Modal.Footer>
        </Modal>
    );
}
