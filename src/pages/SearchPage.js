import { useEffect, useState } from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  FormHelperText,
  OutlinedInput,
  Checkbox,
  ListItemText,
  MobileStepper,
  CircularProgress,
} from "@mui/material";
import { Search, ErrorOutline } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { StyledMainButton } from "../components/StyledMainButton";
import { districts } from "../data/districts";

const groupSizeOptions = [
  "S - weniger als 5 Kinder",
  "M - bis zu 10 Kinder",
  "L - bis zu 15 Kinder",
  "XL - mehr als 15 Kinder",
];

const publicOrPrivateOptions = ["", "Öffentlich", "Privat"];

const openingHoursOptions = [
  "H - Stundenweise",
  "VM - Vormittags",
  "NM - Nachmittags",
  "GT - Ganztags",
];

const ageGroupsOptions = ["0-2 Jahre", "3-4 Jahre", "5 Jahre"];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function SearchPage({ title }) {
  const navigate = useNavigate();
  const [showSpinner, setShowSpinner] = useState(false);
  const [showSnackError, setShowSnackError] = useState(false);

  const [district, setDistrict] = useState("");
  const [districtError, setDistrictError] = useState(false);
  const [allOpeningHours, setAllOpeningHours] = useState([]);
  const [allGroupSizes, setAllGroupSizes] = useState([]);
  const [allAgeGroups, setAllAgeGroups] = useState([]);
  const [publicOrPrivate, setPublicOrPrivate] = useState("");

  useEffect(() => {
    document.title = title;
  }, [title]);

  const startSearch = (e) => {
    e.preventDefault();
    setDistrictError(district === "" ? true : false);
    if (district !== "") {
      if (
        allOpeningHours.length === 0 &&
        allGroupSizes.length === 0 &&
        allAgeGroups.length === 0 &&
        publicOrPrivate === ""
      ) {
        setShowSnackError(true);
      } else {
        setShowSpinner(true);

        setTimeout(() => {
          setShowSpinner(false);
          navigate("/results", {
            state: {
              kiga: {},
              searchParams: {
                district,
                allOpeningHours,
                allGroupSizes,
                allAgeGroups,
                publicOrPrivate,
              },
            },
          });
        }, 3000);
      }
    }
  };

  const handleOpeningHoursChange = (event) => {
    setShowSnackError(false);
    const {
      target: { value },
    } = event;
    setAllOpeningHours(typeof value === "string" ? value.split(",") : value);
  };

  const handleAgeGroupsChange = (event) => {
    setShowSnackError(false);
    const {
      target: { value },
    } = event;
    setAllAgeGroups(typeof value === "string" ? value.split(",") : value);
  };

  const handleGroupSizeChange = (event) => {
    setShowSnackError(false);
    const {
      target: { value },
    } = event;
    setAllGroupSizes(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div className="container col">
      {showSpinner && (
        <div className="snackbar snackbar-info row snackbar-bottom-search">
          <CircularProgress size="1rem" sx={{ color: "white" }} />
          <p className="snackbar-text">Daten laden...</p>
        </div>
      )}
      <div className="headline-box col center">
        <MobileStepper
          variant="dots"
          steps={5}
          activeStep={0}
          position="static"
          backButton={null}
          nextButton={null}
          sx={{ marginBottom: "10px" }}
        />
        <h3 className="headline">Nenne uns zunächst deine Suchkriterien...</h3>
      </div>
      <div className="input-box">
        <FormControl
          required
          color="secondary"
          fullWidth
          sx={{ marginBottom: "15px" }}
          error={districtError}
        >
          <InputLabel id="district">Bezirk</InputLabel>
          <Select
            labelId="district"
            id="district"
            value={district}
            label="Bezirk"
            onChange={(e) => {
              setShowSnackError(false);
              setDistrict(e.target.value);
            }}
          >
            {districts.map((district) => (
              <MenuItem key={district} value={district}>
                {district}
              </MenuItem>
            ))}
          </Select>
          {districtError ? (
            <FormHelperText sx={{ color: "red" }}>
              Bitte Bezirk angeben!
            </FormHelperText>
          ) : (
            ""
          )}
        </FormControl>

        <FormControl color="secondary" fullWidth sx={{ marginBottom: "15px" }}>
          <InputLabel id="openingHours">Betreuungszeiten</InputLabel>
          <Select
            labelId="openingHours"
            id="openingHours"
            multiple
            value={allOpeningHours}
            onChange={handleOpeningHoursChange}
            input={<OutlinedInput label="Betreuungszeiten" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {openingHoursOptions.map((openingHours) => (
              <MenuItem key={openingHours} value={openingHours}>
                <Checkbox
                  color="secondary"
                  checked={allOpeningHours.indexOf(openingHours) > -1}
                />
                <ListItemText primary={openingHours} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl color="secondary" fullWidth sx={{ marginBottom: "15px" }}>
          <InputLabel id="group-size">Gruppengröße</InputLabel>
          <Select
            labelId="groupSizes"
            id="groupSizes"
            multiple
            value={allGroupSizes}
            onChange={handleGroupSizeChange}
            input={<OutlinedInput label="Gruppengröße" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {groupSizeOptions.map((groupSize) => (
              <MenuItem key={groupSize} value={groupSize}>
                <Checkbox
                  color="secondary"
                  checked={allGroupSizes.indexOf(groupSize) > -1}
                />
                <ListItemText primary={groupSize} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl color="secondary" fullWidth sx={{ marginBottom: "15px" }}>
          <InputLabel id="openingHours">Altersgruppen</InputLabel>
          <Select
            labelId="ageGroups"
            id="ageGroups"
            multiple
            value={allAgeGroups}
            onChange={handleAgeGroupsChange}
            input={<OutlinedInput label="Altersgruppen" />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            {ageGroupsOptions.map((ageGroup) => (
              <MenuItem key={ageGroup} value={ageGroup}>
                <Checkbox
                  color="secondary"
                  checked={allAgeGroups.indexOf(ageGroup) > -1}
                />
                <ListItemText primary={ageGroup} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl color="secondary" fullWidth sx={{ marginBottom: "15px" }}>
          <InputLabel id="publicOrPrivate">Öffentlich / Privat</InputLabel>
          <Select
            labelId="publicOrPrivate"
            id="publicOrPrivate"
            value={publicOrPrivate}
            label="Öffentlich / Privat"
            onChange={(e) => {
              setShowSnackError(false);
              setPublicOrPrivate(e.target.value);
            }}
          >
            {publicOrPrivateOptions.map((publicOrPrivate) => (
              <MenuItem key={publicOrPrivate} value={publicOrPrivate}>
                {publicOrPrivate}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
      {showSnackError && (
        <div className="snackbar snackbar-warn row snackbar-bottom-search">
          <ErrorOutline />
          <div className="col">
            <p className="snackbar-text">Zu viele Ergebnisse.</p>
            <p className="snackbar-text">Bitte Suche einschränken!</p>
          </div>
        </div>
      )}
      <div className="col center">
        <StyledMainButton
          startIcon={<Search />}
          variant="contained"
          disabled={showSpinner || showSnackError}
          className="btn__start"
          sx={{
            marginBottom: "100px",
          }}
          onClick={startSearch}
        >
          Suche starten
        </StyledMainButton>
      </div>
    </div>
  );
}

export default SearchPage;
