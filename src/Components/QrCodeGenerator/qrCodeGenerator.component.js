import React, { useState } from "react";
import QRCode from "qrcode.react";
import { useLocation } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import QrCodeIcon from "@mui/icons-material/QrCode";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const GenerateQRCodeFunction = () => {
  const [url, setUrl] = useState("");
  const [qrCodeValue, setQrCodeValue] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const location = useLocation();

  // Set the current URL to generate QR code
  React.useEffect(() => {
    setUrl(window.location.href);
  }, [location]);

  const generateQRCode = () => {
    setQrCodeValue(url);
    openModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <IconButton color="primary" onClick={generateQRCode}>
        <QrCodeIcon />
      </IconButton>

      <Modal open={isModalOpen} onClose={closeModal}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 2,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Share QR Code
          </Typography>
          <QRCode value={qrCodeValue} />
          <Button onClick={closeModal}>Close</Button>
        </Box>
      </Modal>

      {qrCodeValue && <div>{/* QR Code is displayed in the modal */}</div>}
    </div>
  );
};

export default GenerateQRCodeFunction;
