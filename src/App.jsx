import { useEffect } from "react";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Contact from "./components/Contact";
import useScrollSpy from "./useScrollSpy";

function App() {
  useScrollSpy(["profile", "services", "contact"]);
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }, 100); // give DOM time to paint
      }
    }
  }, []);

  return (
    <div className="layout">
      <Sidebar />
      <main className="main-content">
        <Hero />
        <Services />
        <Contact />
      </main>
    </div>
  );
}

export default App;
