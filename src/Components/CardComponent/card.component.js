import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default function ActionAreaCard({ data }) {
  // Find the employee data based on the provided employeeId
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
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={`/path/to/images/${data.employeeId}.jpg`} // replace with the actual path
          alt={certificateName}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {certificateName}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {certificateId}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {completedOn}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
