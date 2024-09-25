import React, { useRef } from 'react';


const SharePage = () => {
  return (
    <div>
      <button >Capture Div as Image</button>
      <div ref={divRef} style={{ padding: '20px', background: 'lightblue', width: '200px', height: '200px' }}>
        <h1>Capture This Div</h1>
      </div>
    </div>
  );
};

export default SharePage;
