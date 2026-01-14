import React from 'react';

export default function Card({ title, body, onDemo }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow hover:shadow-md transition">
      <h4 className="font-semibold">{title}</h4>
      <p className="text-sm text-slate-600 mt-2">{body}</p>
      {onDemo && (
        <div className="mt-4">
          <button onClick={onDemo} className="text-sm font-semibold border border-[#0a1a4e] px-3 py-1 rounded">Request Demo</button>
        </div>
      )}
    </div>
  );
}
