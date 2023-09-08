import React from "react";

interface SectionInterface {
  ref: React.RefObject<HTMLDivElement> | null;
}

const Services: React.FC<SectionInterface> = ({ ref }) => {
  return (
    <div className="section-container" ref={ref}>
      <div className="section-wrapper"></div>
    </div>
  );
};

export default Services;
