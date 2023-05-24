import { Card } from "@mui/material";

export const CustomCard = ({
  label,
  color,
}: {
  label: string;
  color:
    | "inherit"
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "info"
    | "warning";
}) => {
  return <Card sx={{ backgroundColor: color }}>{label}</Card>;
};
