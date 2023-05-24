import { Button } from "@mui/material";

export const CustomButton = ({ label }: { label: string }) => {
  return (
    <Button
      onClick={() => {
        alert("clicked");
      }}
    >
      {label}
    </Button>
  );
};
