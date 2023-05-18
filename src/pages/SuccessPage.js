import { MobileStepper } from "@mui/material";
import { useEffect } from "react";
import { ArrowBack } from "@mui/icons-material";
import { StyledMainButton } from "../components/StyledMainButton";
import { Link } from "react-router-dom";

function SuccessPage({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="container col center">
      <div className="headline-box col center">
        <MobileStepper
          variant="dots"
          steps={5}
          activeStep={4}
          position="static"
          backButton={null}
          nextButton={null}
          sx={{ marginBottom: "10px" }}
        />
        <h3 className="headline">Vielen Dank!</h3>
      </div>
      <div className="success-text">
        Deine Anfrage wurde erfolgreich versandt!
        <br />
        Der Kindergarten wird sich innerhalb von 2-3 Werktagen mit dir in
        Verbindung setzen!
      </div>
      <div className="success-icon">🎉</div>
      <div className="col center">
        <StyledMainButton
          startIcon={<ArrowBack />}
          variant="contained"
          sx={{
            marginBottom: "100px",
          }}
        >
          <Link to="/home">Zurück zum Start</Link>
        </StyledMainButton>
      </div>
    </div>
  );
}

export default SuccessPage;
