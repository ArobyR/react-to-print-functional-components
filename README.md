# Library tutorial react to print using functional components

Hi there! in this repo I'll teach you one away to use react to print using functional components. 

### 1. first step:
  Creating our react app:

  npm:   
    
    $ npx create-react-app
  
  yarn: 
    
    $ yarn add react

  Download the React to print dependency:

    $ npm i -D react-to-print

  or

    $ yarn add react-to-print

  Check: [the repo](https://github.com/gregnb/react-to-print). 

### 2. second step:
  Now create your component to print, but using forwardRef for pass refs and props if is need.

  Example:
  ```jsx
    import React, { forwardRef } from 'react';

    const ComponentToPrint = forwardRef((props, reference) => (
        <div>
            <table ref={reference}>
                <thead>
                    <th>column 1</th>
                    <th>column 2</th>
                    <th>column 3</th>
                </thead>
                <tbody>
                    <tr>
                        <td>data 1</td>
                        <td>data 2</td>
                        <td>data 3</td>
                    </tr>
                </tbody>
            </table>
        </div>
    ));

    export default ComponentToPrint;
  ```

  Ref forwarding is an opt-in feature that lets some components take a ref they receive, and pass it further down (in other words, “forward” it) to a child.

  I recommend read more about it in: [Oficial Documentation]('https://reactjs.org/docs/forwarding-refs.html#gatsby-focus-wrapper) and [Stack Overflow]('https://stackoverflow.com/questions/66664209/how-can-i-use-forwardref-in-react').

### 3. Third step:
  Calling from functional components

  ```jsx
    import React, { useRef } from 'react';
    import ReactToPrint from 'react-to-print';
    import ComponentToPrint from '../src/components/ComponentToPrint/ComponentToPrint';
    import './App.css';

    function App() {
      const componentRef = useRef();

      return (
        <div className="App">
          <ComponentToPrint ref={componentRef} />
          <ReactToPrint 
            trigger={() => <button>Print</button>}
            content={() => componentRef.current}
          />
        </div>
      );
    }

    export default App;
  ```

  With useReactToPrint

  ```jsx
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
  ```