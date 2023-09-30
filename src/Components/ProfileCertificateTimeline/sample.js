import React from "react";
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
const ProfileCertificationTimeline = ({
  profileData,
  certificationTimeline,
}) => {
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
  console.log(certificateSortedTimeline);
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
    // Add more cases for other profiles as needed
    default:
      profileImage = JohnImage; // Default image
  }
  return (
    <div className="profile-certification-timeline-container">
      <div className="profile-container">
        <div className="profile-header">
          <img
            // src={profileData.profileImage} // Replace with your profile image source
            src={profileImage}
            alt="Profile"
            className="profile-image"
          />
          <div className="profile-details">
            <h2>{profileData.name}</h2>
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
                  <strong>Certificate ID:</strong> {certification.certificateId}
                </div>
                <div>
                  <strong>Name:</strong> {certification.name}
                </div>
                <div>
                  <strong>Completed On:</strong> {certification.completedOn}
                </div>
                <div>
                  <strong>Active:</strong>{" "}
                  {new Date(certification.valid_till) > new Date()
                    ? "Yes"
                    : "No"}
                </div>
                <div>
                  <strong>Valid Till:</strong> {certification.valid_till}
                </div>
                {/* Add more certification details as needed */}
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
};