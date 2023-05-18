import { useEffect } from "react";
import { MobileStepper } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { kindergartens } from "../data/kindergartens";
import KindergartenShow from "../components/KindergartenShow";

function ResultsPage({ title }) {
  const { pathname, state } = useLocation();
  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);

  return (
    <div className="container col">
      <div className="headline-box col center">
        <h3 className="headline">Wähle den passenden Kindergarten</h3>
      </div>
      {kindergartens.map((kiga, index) => (
        <KindergartenShow key={index} kiga={kiga} state={state} />
      ))}
      <div className="col center">
        <h3 className="bottomline">Nichts passendes dabei?</h3>
        <Link className="nav-link-black" to="/search">
          Neue Suche starten
        </Link>
      </div>
    </div>
  );
}

export default ResultsPage;
