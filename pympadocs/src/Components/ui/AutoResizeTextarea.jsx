import React, { useState, useEffect, useRef } from "react";
import "../../App.css"; // Import your external CSS file

export default function AutoResizeTextarea() {
  const [value, setValue] = useState("");
  const textareaRef = useRef(null);

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    // Adjust the height of the textarea based on its scrollHeight
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto"; // Reset the height
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set height to scrollHeight
    }
  }, [value]); // Re-run whenever `value` changes

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onInput={handleInput}
      className="auto-resize" // Applying the CSS class
      rows="1"
    />
  );
}
