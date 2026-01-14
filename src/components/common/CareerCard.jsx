import React from 'react';

export default function CareerCard({ title, onApply }) {
  return (
    <div className="bg-white p-5 rounded-lg shadow flex flex-col justify-between">
      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-slate-600 mt-2">Role description for {title}.</p>
      </div>
      <div className="mt-4">
        <button onClick={onApply} className="bg-[#0a1a4e] text-white px-3 py-2 rounded">Apply</button>
      </div>
    </div>
  );
}
