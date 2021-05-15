import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import ComponentToPrint from '../src/components/ComponentToPrint/ComponentToPrint';

import './App.css';

function App() {
  const componentRef = useRef();
  const handleToPrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div className="App">
      <ComponentToPrint ref={componentRef} />
     <button onClick={handleToPrint}>Print!</button>
    </div>
  );
}

export default App;
