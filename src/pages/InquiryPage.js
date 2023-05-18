import { useState, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { TextField, FormControl } from "@mui/material";
import { ErrorOutline } from "@mui/icons-material";
import { isMailAddress, isNumber, isPhoneNumber } from "../utils/utils";

function InquiryPage({ title }) {
  const navigate = useNavigate();
  const { pathname, state } = useLocation();
  const [showSnackError, setShowSnackError] = useState(false);
  const [initialError, setInitialError] = useState(0);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);
  }, [pathname]);

  const handleBackClick = (e) => {
    e.preventDefault();
    navigate("/results", {
      state,
    });
  };

  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [phoneNumberError, setPhoneNumberError] = useState(false);

  const [mailAddress, setMailAddress] = useState("");
  const [mailAddressError, setMailAddressError] = useState(false);

  const [childFirstName, setChildFirstName] = useState("");
  const [childFirstNameError, setChildFirstNameError] = useState(false);

  const [childLastName, setChildLastName] = useState("");
  const [childLastNameError, setChildLastNameError] = useState(false);

  const [childAge, setChildAge] = useState("");
  const [childAgeError, setChildAgeError] = useState(false);

  const sendInquiry = (e) => {
    e.preventDefault();
    setFirstNameError(firstName === "" ? true : false);
    setLastNameError(lastName === "" ? true : false);
    setPhoneNumberError(
      phoneNumber === "" || !isPhoneNumber(phoneNumber) ? true : false
    );
    setMailAddressError(
      mailAddress === "" || !isMailAddress(mailAddress) ? true : false
    );
    setChildFirstNameError(childFirstName === "" ? true : false);
    setChildLastNameError(childLastName === "" ? true : false);
    setChildAgeError(childAge === "" || !isNumber(childAge) ? true : false);

    if (
      firstName !== "" &&
      lastName !== "" &&
      phoneNumber !== "" &&
      isPhoneNumber(phoneNumber) &&
      mailAddress !== "" &&
      isMailAddress(mailAddress) &&
      childFirstName !== "" &&
      childLastName !== "" &&
      childAge !== "" &&
      isNumber(childAge)
    ) {
      setInitialError(initialError + 1);

      if (initialError === 1) {
        navigate("/success");
      }
    } else {
      setShowSnackError(true);
    }
  };

  return (
    <div className="container col">
      {showSnackError && (
        <div className="snackbar snackbar-warn row snackbar-bottom-search">
          <ErrorOutline />
          <div className="col">
            <p className="snackbar-text">Error!</p>
          </div>
        </div>
      )}
      {initialError === 1 && (
        <div className="snackbar snackbar-warn row snackbar-bottom-search">
          <ErrorOutline />
          <div className="col">
            <p className="snackbar-text">Error!</p>
            <p className="snackbar-text">Network connection lost!</p>
          </div>
        </div>
      )}
      <div className="headline-box col center">
        <h3 className="headline">Daten zu deiner Person:</h3>
      </div>
      <div className="input-box">
        <FormControl fullWidth sx={{ marginBottom: "15px" }}>
          <TextField
            color="secondary"
            id="firstName"
            label="Vorname"
            variant="outlined"
            placeholder="Erika"
            onChange={(e) => {
              setShowSnackError(false);
              setFirstName(e.target.value);
            }}
            error={firstNameError}
          />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "15px" }}>
          <TextField
            fullWidth
            color="secondary"
            id="lastName"
            label="Nachname"
            variant="outlined"
            placeholder="Musterfrau"
            onChange={(e) => {
              setShowSnackError(false);
              setLastName(e.target.value);
            }}
            error={lastNameError}
          />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "15px" }}>
          <TextField
            fullWidth
            color="secondary"
            id="phoneNumber"
            label="Telefonnummer"
            variant="outlined"
            placeholder="0664 12345678"
            onChange={(e) => {
              setShowSnackError(false);
              setPhoneNumber(e.target.value);
            }}
            error={phoneNumberError}
          />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "15px" }}>
          <TextField
            fullWidth
            color="secondary"
            id="mailAddress"
            label="E-Mail"
            variant="outlined"
            placeholder="erika.mustermann@mail.com"
            onChange={(e) => {
              setShowSnackError(false);
              setMailAddress(e.target.value);
            }}
            error={mailAddressError}
          />
        </FormControl>
      </div>
      <div className="headline-box col center">
        <h3 className="headline">Daten zu deinem Kind:</h3>
      </div>
      <div className="input-box">
        <FormControl fullWidth sx={{ marginBottom: "15px" }}>
          <TextField
            fullWidth
            color="secondary"
            id="childFirstName"
            label="Vorname"
            variant="outlined"
            placeholder="Max"
            onChange={(e) => {
              setShowSnackError(false);
              setChildFirstName(e.target.value);
            }}
            error={childFirstNameError}
          />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "15px" }}>
          <TextField
            fullWidth
            color="secondary"
            id="childLastName"
            label="Nachname"
            variant="outlined"
            placeholder="Mustermann"
            onChange={(e) => {
              setShowSnackError(false);
              setChildLastName(e.target.value);
            }}
            error={childLastNameError}
          />
        </FormControl>
        <FormControl fullWidth sx={{ marginBottom: "15px" }}>
          <TextField
            fullWidth
            color="secondary"
            id="childAge"
            label="Alter"
            variant="outlined"
            placeholder="3"
            onChange={(e) => {
              setShowSnackError(false);
              setChildAge(e.target.value);
            }}
            error={childAgeError}
          />
        </FormControl>
      </div>
      <div className="input-box">
        <TextField
          fullWidth
          color="secondary"
          rows={6}
          multiline
          placeholder="Verfasse hier deine Nachricht..."
        />
        <div className="col center">
          <Link className="nav-link-black-top" onClick={sendInquiry}>
            Anfrage absenden
          </Link>

          <h3 className="bottomline">Nochmal Details checken?</h3>
          <Link className="nav-link-black" onClick={handleBackClick}>
            Zurück zu Suchergebnissen
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InquiryPage;
