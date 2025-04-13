import { useEffect, useState } from "react";

function useScrollSpy(sectionIds = []) {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveId(id);
            window.history.replaceState(null, "", `#${id}`);
          }
        });
      },
      { threshold: 0.5 } // Adjust for sensitivity
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
}

export default useScrollSpy;
