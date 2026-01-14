import React from 'react';
import { useModal } from '../context/ModalContext';

export default function Footer() {
  const { openModal } = useModal();
  return (
    <footer className="bg-[#0a1a4e] text-white py-10 mt-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold">Let's build the future together.</h3>
        <p className="mt-2">AI-Powered. Data-Driven. Cloud-optimized.</p>
        <div className="mt-4">
          <button onClick={() => openModal('contact')} className="bg-white text-[#0a1a4e] px-4 py-2 rounded">Book a Call</button>
        </div>
      </div>
    </footer>
  );
}
