import { useEffect, useState } from "react";
import { MobileStepper, TextField } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { Link, useLocation } from "react-router-dom";
import { StyledBackButton } from "../components/StyledBackButton";
import ScrollToTopButton from "../components/ScrollToTopButton";
import { kindergartens } from "../data/kindergartens";
import KindergartenShow from "../components/KindergartenShow";
import { FilterAlt } from "@mui/icons-material";

function ResultsPage({ title }) {
  const [searchField, setSearchField] = useState("");
  const { pathname, state } = useLocation();
  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  const filteredKigas = kindergartens.filter((kiga) => {
    return kiga.name.toLowerCase().includes(searchField.toLowerCase());
  });

  return (
    <div className="container col">
      <ScrollToTopButton />
      <div className="headline-box col center">
        <MobileStepper
          variant="dots"
          steps={5}
          activeStep={1}
          position="static"
          backButton={null}
          nextButton={null}
          sx={{ marginBottom: "10px" }}
        />
        <h3 className="headline">Wähle den passenden Kindergarten</h3>
      </div>
      <div className="row search-field">
        <FilterAlt sx={{ color: "secondary", mr: 1, my: 0.5 }} />
        <TextField
          fullWidth
          color="secondary"
          id="search"
          label="Filtern"
          variant="standard"
          onChange={handleChange}
        />
      </div>
      {filteredKigas.map((kiga, index) => (
        <KindergartenShow key={index} kiga={kiga} state={state} />
      ))}
      <div className="col center">
        <h3 className="bottomline">Nichts passendes dabei?</h3>
        <StyledBackButton
          startIcon={<ArrowBack />}
          variant="contained"
          sx={{
            width: 250,
            marginTop: "24px",
            marginBottom: "100px",
          }}
        >
          <Link to="/search">Neue Suche starten</Link>
        </StyledBackButton>
      </div>
    </div>
  );
}

export default ResultsPage;
