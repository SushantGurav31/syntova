import React from 'react';
import { useModal } from '../context/ModalContext';

export default function About() {
  const { openModal } = useModal();
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold">About Us</h2>
          <p className="mt-3 text-slate-600">Syntova helps companies transform with AI-driven systems, automation, and next-generation cloud technology.</p>
          <div className="mt-4 flex gap-3">
            <button onClick={() => openModal('contact')} className="bg-[#0a1a4e] text-white px-4 py-2 rounded">Talk to Sales</button>
            <button onClick={() => openModal('training')} className="border border-[#0a1a4e] px-4 py-2 rounded">View Training</button>
          </div>
        </div>
        <div className="rounded-lg bg-white p-6 shadow"> 
          <h3 className="font-semibold">What we do</h3>
          <ul className="mt-3 space-y-2 text-slate-600">
            <li>AI & Machine Learning solutions</li>
            <li>Cloud & DevOps engineering</li>
            <li>Data analytics platforms</li>
            <li>Automation & workflow orchestration</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
