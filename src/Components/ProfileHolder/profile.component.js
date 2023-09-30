//import ProfileInfo from "../ProfileInfo/profileInfo.component";
import ProfileCertificationTimeline from "../ProfileCertificateTimeline/profileCertificateTimeline.component";
import { useParams } from "react-router-dom";
function ProfileComponent({ data }) {
  const { employeeId } = useParams();
  const employee = data.find(
    (employee) => employee.employeeId === parseInt(employeeId)
  );

  // If employee is not found, you can render an error message or redirect
  if (!employee) {
    return <div>Employee not found</div>;
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
