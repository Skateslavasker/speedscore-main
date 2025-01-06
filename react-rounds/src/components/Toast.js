// Toast.js
import React, { useState, useEffect } from 'react';

function Toast({ msg, ariaLabel }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Auto-hide after a few seconds if desired
    const timer = setTimeout(() => setVisible(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="toast-container"
      role="alert"
      aria-atomic="true"
      aria-live="assertive"
    >
      <div className="toast-text">{msg}</div>
      <button
        type="button"
        className="btn-close toast-close"
        aria-label={ariaLabel || 'Close'}
        onClick={() => setVisible(false)}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

export default Toast;
