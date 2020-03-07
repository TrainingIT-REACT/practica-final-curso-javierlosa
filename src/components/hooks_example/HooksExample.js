import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

import "./HooksExample.css";

// Ejemplos de textareas
import CodeArea from './CodeArea';

const HooksExample = () => {
  const codearea = useRef(null);
  const [code, setCode] = useState('');

  // Sustitye a didUpdate
  useEffect(() => {
    if (code !== "") {
      document.title = "Writing code"
    };
    return () => {
      document.title = "1.10 Introducción a Hooks";
    }
  }, [code]);

  // Mismo efecto que componentDidMount
  useEffect(() => codearea.current.focus(), [false]);

  return (
    <div className="App container">
      <h1>1.10 Introducción a Hooks</h1>
      <div className="row">
        <div className="six columns">
          <CodeArea ref={codearea} onChange={e => setCode(e.target.value)} />
        </div>
      </div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default HooksExample;
