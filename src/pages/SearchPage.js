import { useEffect, useState } from "react";
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  OutlinedInput,
  Checkbox,
  ListItemText,
} from "@mui/material";
import { ErrorOutline } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { districts } from "../data/districts";
import { Link } from "react-router-dom";

const groupSizeOptions = ["S", "M", "L", "XL"];

const publicOrPrivateOptions = ["", "Ö", "P"];

const openingHoursOptions = ["H", "VM", "NM", "GT"];

const ageGroupsOptions = ["0-2", "3-4", "5"];

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
        setTimeout(() => {
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
      {showSnackError && (
        <div className="snackbar snackbar-warn row snackbar-bottom-search">
          <ErrorOutline />
          <div className="col">
            <p className="snackbar-text">Error in Java compiler</p>
            <p className="snackbar-text">java.lang.StockOverflowError</p>
          </div>
        </div>
      )}
      <div className="headline-box col center">
        <h3 className="headline">Nenne uns zunächst deine Suchkriterien...</h3>
      </div>
      <div className="input-box">
        <FormControl
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
      <div className="col center">
        <Link className="nav-link-black" onClick={startSearch}>
          Suche starten
        </Link>
      </div>
    </div>
  );
}

export default SearchPage;
