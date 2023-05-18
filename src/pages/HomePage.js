import Button from "@mui/material/Button";
import { ArrowForward } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { StyledMainButton } from "../components/StyledMainButton";

function LandingPage() {
  const [showSpinner, setShowSpinner] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Kindergartensuche";
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    setShowSpinner(true);

    setTimeout(() => {
      setShowSpinner(false);
      navigate("/information");
    }, 3000);
  };

  return (
    <div className="landing-page">
      {showSpinner && (
        <div className="snackbar snackbar-info snackbar-bottom-home row">
          <CircularProgress size="1rem" sx={{ color: "white" }} />
          <p className="snackbar-text">Applikation lädt...</p>
        </div>
      )}
      <img
        src="/images/kindergarten_text.png"
        alt="Kindergarten"
        style={{ width: "300px" }}
      ></img>
      <br />
      <StyledMainButton
        variant="contained"
        disabled={showSpinner}
        startIcon={<ArrowForward />}
        sx={{
          width: 250,
        }}
        onClick={handleClick}
      >
        Zur Kindergartensuche
      </StyledMainButton>
    </div>
  );
}

export default LandingPage;
