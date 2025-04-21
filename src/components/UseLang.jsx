import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

const useLang = () => useContext(LanguageContext);

export default useLang;
