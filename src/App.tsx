import React, { useState, useEffect } from 'react';
import Editor from './Editor';
import uselocalStorage from './LocalStorageHook';
import './style.css';

export default function App() {
  const [html, setHtml] = uselocalStorage('html', '<p>Hey!</p>');
  const [css, setCss] = uselocalStorage(
    'css',
    `p {
    text-align: center;
    }`
  );
  const [js, setJs] = uselocalStorage('js', '');
  const [srcDoc, setSourceDoc] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setSourceDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
      `);
    }, 1000);
    return () => clearTimeout(timer);
  }, [html, css, js]);

  return (
    <div className="playground">
      <h5>HTML Playground</h5>
      <div className="editors-container">
        <Editor
          name="HTML"
          language="xml"
          value={html}
          onChange={(val: string) => setHtml(val)}
        />
        <Editor
          name="CSS"
          language="css"
          value={css}
          onChange={(val: string) => setCss(val)}
        />
        <Editor
          name="JS"
          language="js"
          value={js}
          onChange={(val: string) => setJs(val)}
        />
      </div>
      <h5>Output</h5>
      <iframe
        width="100%"
        height="100%"
        frameBorder="0"
        title="Result"
        srcDoc={srcDoc}
        className="iframe"
      />
    </div>
  );
}
