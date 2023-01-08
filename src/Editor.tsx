import React from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2-react-17';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import './style.css';

export default function Editor({
  language,
  onChange,
  value,
  name,
}: {
  language: 'xml' | 'css' | 'js';
  onChange: any;
  value: string;
  name: string;
}) {
  return (
    <div className="editor">
      <div className="name">{name}</div>
      <CodeMirror
        value={value}
        onBeforeChange={(editor, data, value) => {
          onChange(value);
        }}
        options={{
          mode: language,
          lineWrapping: true,
          theme: 'material',
          lineNumbers: true,
        }}
      />
    </div>
  );
}
