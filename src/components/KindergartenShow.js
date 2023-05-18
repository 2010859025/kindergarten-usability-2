import {
  AccessTime,
  BubbleChart,
  ChildCare,
  LocationOn,
  Loupe,
  Map,
  Public,
} from "@mui/icons-material";
import { Paper, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { joinAbbreviations } from "../utils/utils";

function KindergartenShow({ kiga, index, state }) {
  const navigate = useNavigate();

  const { searchParams } = state;

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

  const showDetails = (e) => {
    e.preventDefault();
    navigate("/details", {
      state: {
        kiga,
        searchParams,
      },
    });
  };

  return (
    <Paper key={index} className="result-container">
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
              {publicOrPrivate === "" ? kiga.publicOrPrivate : publicOrPrivate}
            </p>
          </div>
        </div>
      </div>
      <Button
        variant="contained"
        className="result-button"
        startIcon={<Loupe />}
        sx={{ position: "absolute", bottom: "15px", right: "15px" }}
        onClick={showDetails}
      >
        Details
      </Button>
    </Paper>
  );
}

export default KindergartenShow;
