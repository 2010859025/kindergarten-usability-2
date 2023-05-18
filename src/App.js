import theme from "./styles/theme";
import { ThemeProvider } from "@mui/material/styles";
import { Routes, Route, useLocation } from "react-router-dom";
import ReactBurgerMenu from "./components/ReactBurgerMenu";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import InformationPage from "./pages/InformationPage";
import SearchPage from "./pages/SearchPage";
import ErrorPage from "./pages/ErrorPage";
import ResultsPage from "./pages/ResultsPage";
import DetailPage from "./pages/DetailPage";
import { useEffect, useState } from "react";
import InquiryPage from "./pages/InquiryPage";
import SuccessPage from "./pages/SuccessPage";

const titles = {
  "/": {
    header: "Home",
    document: "Kindergartenwahl",
  },
  "/home": {
    header: "Home",
    document: "Kindergartenwahl",
  },
  "/information": {
    header: "Informationen",
    document: "Kindergartenwahl: Informationen",
  },
  "/search": {
    header: "Suche",
    document: "Kindergartenwahl: Suche",
  },
  "/results": {
    header: "Suchergebnisse",
    document: "Kindergartenwahl: Suchergebnisse",
  },
  "/details": {
    header: "Details",
    document: "Kindergartenwahl: Details",
  },
  "/inquiry": {
    header: "Anfrage senden",
    document: "Kindergartenwahl: Anfrage senden",
  },
  "/success": {
    header: "Anfrage",
    document: "Kindergartenwahl: Anfrage versandt",
  },
};

function App() {
  const [showLandingPage, setShowLandingPage] = useState(true);
  const [pageTitle, setPageTitle] = useState("404 Not found");
  const [documentTitle, setDocumentTitle] = useState("404 Not found");
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenuChange = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (Object.keys(titles).indexOf(location.pathname) !== -1) {
      setPageTitle(titles[location.pathname].header);
      setDocumentTitle(titles[location.pathname].document);
    } else {
      setPageTitle("404 Not found");
      setDocumentTitle("404 Not found");
    }

    location.pathname === "/" || location.pathname === "/home"
      ? setShowLandingPage(true)
      : setShowLandingPage(false);
  }, [location]);

  return (
    <ThemeProvider theme={theme}>
      <div id="outer-container">
        {!showLandingPage ? (
          <>
            <ReactBurgerMenu
              outerContainerId={"outer-container"}
              pageWrapId={"page-wrap"}
              isOpen={isOpen}
              toggleMenuChange={toggleMenuChange}
            />
            <Header title={pageTitle} />
          </>
        ) : (
          ""
        )}
        <div id="page-wrap">
          <Routes>
            <Route path="/" element={<HomePage title={documentTitle} />} />
            <Route path="/home" element={<HomePage title={documentTitle} />} />
            <Route
              path="/information"
              element={<InformationPage title={documentTitle} />}
            />
            <Route
              path="/search"
              element={<SearchPage title={documentTitle} />}
            />
            <Route
              path="/results"
              element={<ResultsPage title={documentTitle} />}
            />
            <Route
              path="/details"
              element={<DetailPage title={documentTitle} />}
            />
            <Route
              path="/inquiry"
              element={<InquiryPage title={documentTitle} />}
            />
            <Route
              path="/success"
              element={<SuccessPage title={documentTitle} />}
            />
            <Route path="*" element={<ErrorPage title="404 Not found" />} />
          </Routes>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
