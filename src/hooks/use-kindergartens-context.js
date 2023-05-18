import { useContext } from "react";
import KindergartenContext from "../context/kindergartens";

function useKindergartensContext() {
  return useContext(KindergartenContext);
}

export default useKindergartensContext;
