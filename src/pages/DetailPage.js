import { useEffect } from "react";
import { StyledMainButton } from "../components/StyledMainButton";
import { Paper } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Send,
  AccessTime,
  BubbleChart,
  ChildCare,
  LocationOn,
  Map,
  Public,
} from "@mui/icons-material";
import { joinAbbreviations } from "../utils/utils";
import { Link } from "react-router-dom";

function DetailPage({ title }) {
  const { pathname, state } = useLocation();
  const navigate = useNavigate();
  const availabilityRate = Math.floor(Math.random() * 100);

  const { kiga, searchParams } = state;

  const {
    district,
    allGroupSizes,
    allOpeningHours,
    allAgeGroups,
    publicOrPrivate,
  } = searchParams;

  const groupSizes = joinAbbreviations(allGroupSizes);
  const openingHours = joinAbbreviations(allOpeningHours);
  const ageGroups = joinAbbreviations(allAgeGroups);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);

  const handleInquiryClick = (e) => {
    e.preventDefault();
    navigate("/inquiry", {
      state: {
        kiga,
        searchParams,
      },
    });
  };

  const handleBackClick = (e) => {
    e.preventDefault();
    navigate("/results", {
      state: {
        kiga,
        searchParams,
      },
    });
  };

  return (
    <div className="container col">
      <div className="headline-box col center">
        <h3 className="headline">Hier findest du die Einzelheiten</h3>
      </div>
      <div>
        <Paper>
          <div className="box col">
            <img
              alt="Kindergarten"
              src={`/images/kiga_${kiga.id}.png`}
              className="result-pic"
            />
            <div className="col">
              <h3 className="result-headline">{kiga.name}</h3>
              <div className="row vert-center">
                <Map className="result-icon" />
                <p>{kiga.street}</p>
              </div>
              <div className="row vert-center">
                <LocationOn className="result-icon" />
                <p>{district}</p>
              </div>
              <div className="row vert-center">
                <AccessTime className="result-icon" />
                <p>
                  {allOpeningHours.length === 0
                    ? kiga.openingHours.join(", ")
                    : openingHours}
                </p>
              </div>
              <div className="row vert-center">
                <BubbleChart className="result-icon" />
                <p>
                  {allGroupSizes.length === 0
                    ? kiga.groupSizes.join(", ")
                    : groupSizes}
                </p>
              </div>
              <div className="row vert-center">
                <ChildCare className="result-icon" />
                <p>
                  {allAgeGroups.length === 0
                    ? kiga.ageGroups.join(", ")
                    : ageGroups}
                </p>
              </div>
              <div className="row vert-center">
                <Public className="result-icon" />
                <p>
                  {publicOrPrivate === ""
                    ? kiga.publicOrPrivate
                    : publicOrPrivate}
                </p>
              </div>
            </div>
            <p className="availability">{availabilityRate}% Auslastung</p>
            <div className="kiga-text">
              {" "}
              Hallo!
              <br />
              Wir sind der Kindergarten <b>{kiga.name} 😄</b>
              <br />
              <b>
                Wir freuen uns sehr, dass du dich für unseren Kindergarten
                interessierst!
              </b>{" "}
              🙋
              <br />
              <br />
              Wir befinden uns{" "}
              <b>mitten im Zentrum des wunderschönen {district}s in Wien</b>
              🏡 und{" "}
              <b>
                bieten neben kleinen (S) auch mittelgroßen (M) Gruppengrößen
              </b>
              . Wir freuen uns sehr Kinder von <b>0 - 5</b> Jahren in unserem
              Haus begrüßen zu dürfen und verfolgen das Konzept der{" "}
              <b>altermäßig gemischten Gruppen</b>. 👩‍👧‍👦
              <br />
              <br />
              Neben gewöhnlichem <b>Mittagessen</b> 🍲 gibt es bei uns außerdem
              die Option zwischen{" "}
              <b>vegetarischen 🥬 sowie glutenfreien 🌾 Menüs</b> zu wählen.
              Bitte gib uns das wenn möglich gleich zu Beginn bei der Anfrage
              bzw. Anmeldung bekannt! So kann sichergestellt werden, dass gleich
              von Beginn an für die Wünsche deines Kindes gesorgt ist.
              <br />
              <br />
              Wir denken, dass sich Kinder nur dann optimal entfalten können
              wenn sie auch <b>viel frische Luft 🍃 und Platz zum spielen</b> 🧸
              🚂 🪀 haben. Deshalb stehen <b>Ausflüge ins Grüne</b> ☘️ ganz oben
              auf unserem Programm!
              <br />
              <br />
              Ganz besonders freuen wir uns auch über{" "}
              <b>Kinder von Regenbogenfamilien</b> 🌈 🌈 🌈
              <br />
              <br />
              Solltest du weitere Fragen haben oder sonstige Anliegen schick uns
              gerne eine Anfrage!
            </div>
          </div>
        </Paper>
      </div>
      <div className="col center">
        <Link className="nav-link-black-top" onClick={handleInquiryClick}>
          Anfrage schicken
        </Link>

        <h3 className="bottomline">Andere Kindergärten ansehen?</h3>
        <Link className="nav-link-black" onClick={handleBackClick}>
          Zurück zu den Resultaten
        </Link>
      </div>
    </div>
  );
}

export default DetailPage;
