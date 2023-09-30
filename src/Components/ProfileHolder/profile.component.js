//import ProfileInfo from "../ProfileInfo/profileInfo.component";
import ProfileCertificationTimeline from "../ProfileCertificateTimeline/profileCertificateTimeline.component";
import { useParams } from "react-router-dom";
// import { Typography, Box } from "@mui/material";
// import WarningIcon from "@mui/icons-material/Warning";
import PageNotFound from "../PageNotFound/pageNotFound.component";
function ProfileComponent({ data }) {
  const { employeeId } = useParams();
  const employee = data.find(
    (employee) => employee.employeeId === parseInt(employeeId)
  );

  // If employee is not found, you can render an error message or redirect
  if (!employee || employee.isActive === false) {
    return (
      // <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      //   <Typography variant="h6" color="error">
      //     Employee Details Not Found
      //   </Typography>
      //   <WarningIcon color="error" sx={{ fontSize: 40, marginTop: 2 }} />
      // </Box>
      <PageNotFound data={"Employee Data Not Available"} />
    );
  }
  return (
    <div>
      <ProfileCertificationTimeline
        profileData={employee}
        certificationTimeline={employee.qualifications}
      />
    </div>
  );
  //   return (
  //     <div>
  //       <ProfileInfo data={operationObj} />
  //     </div>
  //   );
}
export default ProfileComponent;
