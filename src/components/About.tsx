import React from 'react';


interface AboutInterface {
    ref: React.RefObject<HTMLDivElement> | null;
}

const About: React.FC<AboutInterface> = ({ref}) => {
  return (
    <div className="about-container" ref={ref}>A</div>
  )
}

export default About;