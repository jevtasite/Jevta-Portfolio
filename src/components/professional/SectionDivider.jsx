import { useEffect, useState } from "react";
import "../../styles/professional.css";

const SectionDivider = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`section-divider ${isVisible ? "visible" : ""}`}>
      <span className="divider-comment">
        &lt;!-- SECTION_BREAK: ABOUT --&gt;
      </span>
    </div>
  );
};

export default SectionDivider;
