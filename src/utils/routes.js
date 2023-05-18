// NOT USED

import HomePage from "../pages/HomePage";
import InformationPage from "../pages/InformationPage";
import SearchPage from "../pages/SearchPage";
import ResultsPage from "../pages/ResultsPage";

const routes = [
  { path: "/", component: HomePage, title: "Home" },
  { path: "/information", component: InformationPage, title: "Informationen" },
  { path: "/search", component: SearchPage, title: "Suche" },
  { path: "/results", component: ResultsPage, title: "Suchergebnisse" },
];

export default routes;
