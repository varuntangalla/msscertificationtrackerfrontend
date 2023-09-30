import ActionAreaCard from "../CardComponent/card.component";

export default function ProfileInfo({ data }) {
  const employee = data.items.find(
    (employee) => employee.employeeId === parseInt(data.employeeId)
  );
  // If employee is not found, you can render an error message or redirect
  if (!employee) {
    return <div>Employee not found</div>;
  }

  const { qualifications } = employee;

  // Assuming certifications array has only one item in this case
  const {
    certificateId,
    completedOn,
    name: certificateName,
  } = qualifications[0];
  return (
    <div>
      <ActionAreaCard data={data} />
    </div>
  );
}
