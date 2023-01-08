import React, { useState, useEffect } from 'react';

const uselocalStorage = (key: string, initialValue: string) => {
  const [val, setVal] = useState(localStorage.getItem(key) || initialValue);
  useEffect(() => {
    localStorage.setItem(key, val);
  }, [val]);
  return [val, setVal];
};

export default uselocalStorage;
