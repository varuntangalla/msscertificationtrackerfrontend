import { useState } from "react";
import QRCode from "qrcode.react";
import IconButton from "@mui/material/IconButton";
import QrCodeIcon from "@mui/icons-material/QrCode";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { timelineItemClasses } from "@mui/lab/TimelineItem";
import "./profileCertificateTimeline.css"; // Import your CSS file for styling
import JohnImage from "../../assets/John Doe.png";
import BobImage from "../../assets/Bob Johnson.png";
import JaneImage from "../../assets/Jane Smith.png";

import Eva from "../../assets/Eva.png";
import Charlie from "../../assets/Charlie.png";
import Alice from "../../assets/Alice.png";
// import GenerateQRCodeFunction from "../QrCodeGenerator/qrCodeGenerator.component";

const ProfileCertificationTimeline = ({
  profileData,
  certificationTimeline,
}) => {
  /////////////////////////////////////////////////////////////////////
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  //////////////////////////////////////////////////////////////////////
  function sortQualificationsByCompletedOn(qualifications) {
    // Custom sorting function to compare dates
    const compareDates = (a, b) =>
      new Date(b.completedOn) - new Date(a.completedOn);

    // Sort the qualifications array
    qualifications.sort(compareDates);

    return qualifications;
  }

  const certificateSortedTimeline = sortQualificationsByCompletedOn(
    certificationTimeline
  );

  let profileImage;
  switch (profileData.name) {
    case "John Doe":
      profileImage = JohnImage;
      break;
    case "Bob Johnson":
      profileImage = BobImage;
      break;
    case "Jane Smith":
      profileImage = JaneImage;
      break;
    case "Alice Johnson":
      profileImage = Alice;
      break;
    case "Eva Williams":
      profileImage = Eva;
      break;
    case "Charlie Brown":
      profileImage = Charlie;
      break;
    default:
      profileImage = JohnImage; // Default image
  }

  return (
    <div className="profile-certification-timeline-container">
      <div className="profile-container">
        <div className="profile-header">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <div className="profile-details">
            <h2>
              {profileData.name}
              <IconButton color="primary" onClick={openModal}>
                <QrCodeIcon fontSize="small" />
              </IconButton>
            </h2>
            <div>
              <strong>Designation:</strong> {profileData.designation}
            </div>
            <div className="profile-jobdescription">
              <strong>JOB Description:</strong>
              <p>{profileData.jobDescription}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="certification-timeline-container">
        <h2>Certification Timeline</h2>
        {certificateSortedTimeline.length === 0 ? (
          <div className="no-certifications-card">
            No Certifications Found...
          </div>
        ) : (
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            {certificateSortedTimeline.map((certification) => (
              <TimelineItem key={certification.certificateId}>
                <TimelineSeparator>
                  <TimelineDot
                    color={
                      new Date(certification.valid_till) > new Date()
                        ? "success"
                        : "error"
                    }
                  />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent id="certification-card">
                  <div>
                    <strong>Certificate ID:</strong>{" "}
                    {certification.certificateId}
                  </div>
                  <div>
                    <strong>Name:</strong> {certification.name}
                  </div>
                  <div>
                    <strong>Completed On:</strong> {certification.completedOn}
                  </div>
                  {/* <div>
                    <strong>Active:</strong>{" "}
                    {new Date(certification.valid_till) > new Date()
                      ? "Yes"
                      : "No"}
                  </div> */}
                  <div>
                    <strong>Valid Till:</strong> {certification.valid_till}
                  </div>
                  <div>
                    {" "}
                    {new Date(certification.valid_till) > new Date() ? (
                      <button
                        className="active-button"
                        style={{ backgroundColor: "green", color: "white" }}
                        disabled
                      >
                        Active
                      </button>
                    ) : (
                      <button
                        className="expired-button"
                        style={{ backgroundColor: "red", color: "white" }}
                        disabled
                      >
                        Expired
                      </button>
                    )}
                  </div>
                  {/* Add more certification details as needed */}
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        )}
      </div>

      <Modal open={isModalOpen} onClose={closeModal}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 350,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 3,
            textAlign: "justify",
            fontFamily: "Roboto, sans-serif",
          }}
        >
          <IconButton
            color="primary"
            aria-label="close"
            onClick={closeModal}
            sx={{
              position: "absolute",
              top: 0,
              right: 0,
            }}
          >
            <CloseIcon />
          </IconButton>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{
              marginBottom: 2,
            }}
          >
            Unleash your essence with this QR Code – let your profile speak
            volumes!
          </Typography>
          <QRCode value={window.location.href} />
        </Box>
      </Modal>
    </div>
  );
};

export default ProfileCertificationTimeline;
