import { createContext, useState, useEffect } from "react";
import translations from "../assets/translation.json";

export const LanguageContext = createContext();

const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState("en-GB");

  // Load language from localStorage on mount
  useEffect(() => {
    const storedLang = localStorage.getItem("lang");
    if (storedLang && translations[storedLang]) {
      setLang(storedLang);
    }
  }, []);

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem("lang", lang);
  }, [lang]);

  // Translation function
  const t = (keyPath) => {
    return (
      keyPath.split(".").reduce((acc, key) => acc?.[key], translations[lang]) ||
      keyPath
    );
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
