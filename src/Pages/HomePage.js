import React from "react";
import { useState } from "react";
import Cookies from "js-cookie";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function HomePage() {
  const [show, setShow] = useState(true);

  const handleAcceptCookies = () => {
    Cookies.set("cookieConsent", true);
  };

  const handleRejectCookies = () => {
    Cookies.remove("cookieConsent");
  };

  const handleClose = () => {
    setShow(false);
    sessionStorage.setItem("modalDisplayed", "true");
  };

  const modalDisplayed = sessionStorage.getItem("modalDisplayed");
  console.log(Cookies.get("cookieConsent"));

  return (
    <>
      <p className="text-5xl">Homepage</p>

      <div
        className="modal show"
        style={{ display: "block", position: "initial" }}
      >
        {!modalDisplayed && (
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Cookie Agreement</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              This website uses cookies to improve your experience. Do you
              accept cookies?
            </Modal.Body>
            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => {
                  handleClose();
                  handleAcceptCookies();
                }}
              >
                Agree and close
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  handleClose();
                  handleRejectCookies();
                }}
              >
                Reject and close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>

      <sub>Cookie set: {Cookies.get("cookieConsent")}</sub>
    </>
  );
}

export default HomePage;
