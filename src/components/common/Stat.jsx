import React from 'react';

export default function Stat({ label, value }) {
  return (
    <div className="bg-white p-3 rounded shadow-sm text-center">
      <div className="text-xl font-bold">{value}</div>
      <div className="text-sm text-slate-600">{label}</div>
    </div>
  );
}
