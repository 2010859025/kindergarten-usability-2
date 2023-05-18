import { useEffect } from "react";
import { Link } from "react-router-dom";

function SuccessPage({ title }) {
  useEffect(() => {
    document.title = title;
  }, [title]);

  return (
    <div className="container col center">
      <div className="headline-box col center">
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
        <Link className="nav-link-black" to="/home">
          Zurück zum Start
        </Link>
      </div>
    </div>
  );
}

export default SuccessPage;
