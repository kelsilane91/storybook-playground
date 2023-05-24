import { Button } from "@mui/material";

export const CustomButton = ({
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
  return (
    <Button
      onClick={() => {
        alert("clicked");
      }}
      color={color}
    >
      {label}
    </Button>
  );
};
