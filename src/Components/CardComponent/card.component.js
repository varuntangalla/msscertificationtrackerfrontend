import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { useParams } from "react-router-dom";
export default function ActionAreaCard({ data }) {
  // Find the employee data based on the provided employeeId
  const { employeeId } = useParams();
  const employee = data.find(
    (employee) => employee.employeeId === parseInt(employeeId)
  );

  // If employee is not found, you can render an error message or redirect
  if (!employee) {
    return <div>Employee not found</div>;
  }

  const { name, certifications } = employee;

  // Assuming certifications array has only one item in this case
  const { certId, completedOn, name: certificateName } = certifications[0];

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`/path/to/images/${employeeId}.jpg`} // replace with the actual path
          alt={certificateName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {certificateName}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {certId}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {completedOn}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
