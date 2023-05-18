import { Button } from "@mui/material";

function MainBtn({ icon }) {
  return (
    <Button variant="contained" color="primary" startIcon={icon}>
      Click me
    </Button>
  );
}

export default MainBtn;
