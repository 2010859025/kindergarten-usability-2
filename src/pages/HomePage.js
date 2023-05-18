import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Kindergartensuche";
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    setTimeout(() => {
      navigate("/information");
    }, 3000);
  };

  return (
    <div className="landing-page">
      <img
        src="/images/kindergarten_text.png"
        alt="Kindergarten"
        style={{ width: "300px" }}
      ></img>
      <br />
      <Link className="nav-link-white" onClick={handleClick}>
        Zur Kindergartensuche
      </Link>
    </div>
  );
}

export default LandingPage;
