import React, { useState } from 'react';

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="mb-2 font-bold text-left uppercase accordion-item text-md text-secondary-dark">
      <div className="divide-y accordion-title divide-solid" onClick={() => setIsActive(!isActive)} >
        <div>{title} <span>{isActive ? '-' : '+'}</span></div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};

export default Accordion;