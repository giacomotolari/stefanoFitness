import React from 'react';
import './appuntamenti.scss';
function Appuntamenti() {
  return (
    <div className='Appuntamenti'>
      <iframe
        src='https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23D50000&ctz=Europe%2FRome&src=dG9sYXJpZ2lhY29tb0BnbWFpbC5jb20&src=MWM1dGpuNmc2NWVpMHNjdHZ1bWpuMXFuN2dAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=cmZrazVraXQzcjUyaHJxa2oyN2VwdTBsY29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=aXQuaXRhbGlhbiNob2xpZGF5QGdyb3VwLnYuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%237986CB&color=%23F09300&color=%237986CB&color=%2333B679&color=%230B8043'
        title='myFrame'
      ></iframe>
    </div>
  );
}

export default Appuntamenti;
