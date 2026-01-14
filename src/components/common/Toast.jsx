import React, { useEffect } from 'react';

export default function Toast({ message, onClose }) {
  useEffect(() => {
    const t = setTimeout(() => onClose(), 3000);
    return () => clearTimeout(t);
  }, [message, onClose]);

  return (
    <div className="fixed bottom-6 right-6 bg-[#0a1a4e] text-white px-4 py-2 rounded shadow">{message}</div>
  );
}
