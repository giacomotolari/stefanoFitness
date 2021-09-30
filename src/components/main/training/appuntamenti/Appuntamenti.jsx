import React from 'react';
import './appuntamenti.scss'
function Appuntamenti() {
  return (
    <div className="Appuntamenti">
      <iframe
        src='https://calendar.google.com/calendar/embed?src=1c5tjn6g65ei0sctvumjn1qn7g%40group.calendar.google.com&ctz=Europe%2FRome'
        title='myFrame'
        // frameborder='0'
        // scrolling='no'
      ></iframe>
    </div>
  );
}

export default Appuntamenti;
