import React, { memo } from 'react';
import './style.css';

const Output = ({ srcDoc }: { srcDoc: string }) => {
  return (
    <iframe
      width="100%"
      height="100%"
      frameBorder="0"
      title="Result"
      srcDoc={srcDoc}
      className="iframe"
    />
  );
};

export default memo(Output);
