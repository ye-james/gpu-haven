import React, { useState } from 'react'
import Accordion from './Accordion';

  
function ProductAccordion() {
  const accordionData = [
    {
      title: 'OverView',
      content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`
    },
    {
      title: 'Specifications',
      content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`
    }
  ];

  return (
    <div>
      <h1>React Accordion Demo</h1>
      <div className="w-3/4 px-8 py-4 mx-auto border-2 border-solid accordion border-primary-gray">
        {accordionData.map(({ title, content }) => (
          <Accordion className="border-2 border-solid" title={title} content={content} />
        ))}
      </div>
    </div>
  );
};

export default ProductAccordion