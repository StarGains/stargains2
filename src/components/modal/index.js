import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import { GoLocation } from "react-icons/go";
import { MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Contact Info
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <div className="info-container">
            <MdOutlineMail className="info-image" />
            <div>
              <p>
                <spawn className="tspawn">Email</spawn>
                <br />
                Stargainsdeportment@gmail.com
              </p>
            </div>
          </div>

          <div className="info-container">
            <BsTelephone className="info-image" />
            <div>
              <p>
                <spawn className="tspawn">Phone </spawn>
                <br />
                +91-9886549287
              </p>
            </div>
          </div>
          <div className="info-container">
            <GoLocation className="info-image" />
            <div>
              <p>
                <spawn className="tspawn">Location</spawn>
                <br />
                Headquarters - Chennai
              </p>
            </div>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function ModalApp() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <p onClick={() => setModalShow(true)}>Need help ?Contact info</p>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ModalApp;
