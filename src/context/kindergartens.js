// NOT USED

import { createContext, useState } from "react";

const KindergartenContext = createContext();

function Provider({ children }) {
  const [path, setPath] = useState("default");
  const [kindergartens, setKindergartens] = useState([]);

  const setCurrentPath = (path) => {
    setPath(path);
  };

  const valueToShare = {
    kindergartens,
    path,
    setCurrentPath,
  };

  return (
    <KindergartenContext.Provider value={valueToShare}>
      {children}
    </KindergartenContext.Provider>
  );
}

export { Provider };
export default KindergartenContext;
