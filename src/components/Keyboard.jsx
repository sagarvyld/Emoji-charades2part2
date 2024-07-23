import React, { useState, useRef, useEffect } from 'react';

const TextareaWithKeyboard = () => {
  const [isVisible, setIsVisible] = useState(false);
  const textareaRef = useRef(null);

  const handleFocus = () => {
    if (textareaRef.current) {
      textareaRef.current.setAttribute('inputmode', 'text');
      textareaRef.current.setAttribute('enterkeyhint', 'done');
    }
  };

  const handleBlur = () => {
    // Infer Done button click by checking blur event
    setIsVisible(true);
    if (textareaRef.current) {
      textareaRef.current.removeAttribute('inputmode');
      textareaRef.current.removeAttribute('enterkeyhint');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      setIsVisible(true);
    }
  };

  useEffect(() => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.addEventListener('focus', handleFocus);
      textarea.addEventListener('blur', handleBlur);
      textarea.addEventListener('keypress', handleKeyPress);
    }

    return () => {
      if (textarea) {
        textarea.removeEventListener('focus', handleFocus);
        textarea.removeEventListener('blur', handleBlur);
        textarea.removeEventListener('keypress', handleKeyPress);
      }
    };
  }, []);

  return (
    <div>
      <textarea
        ref={textareaRef}
        rows="4"
        cols="50"
        placeholder="Type something..."
        onClick={() => setIsVisible(false)}
      ></textarea>
      {isVisible && <p>Hello</p>}
    </div>
  );
};

export default TextareaWithKeyboard;
