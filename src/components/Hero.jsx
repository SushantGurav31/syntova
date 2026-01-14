import React from 'react';
import { useModal } from '../context/ModalContext';
import Stat from './common/Stat';

export default function Hero() {
  const { openModal } = useModal();

  return (
    <header id="home" className="bg-gradient-to-b from-slate-100 to-white">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">Empowering the Future with AI Innovation</h1>
          <p className="mt-4 text-slate-600 max-w-xl">We build intelligent, scalable and cloud-optimized digital solutions for businesses.</p>

          <div className="mt-6 flex gap-3 flex-wrap">
            <button onClick={() => openModal('demo')} className="bg-[#0a1a4e] text-white px-5 py-3 rounded font-semibold">Request Demo</button>
            <button onClick={() => openModal('training')} className="border border-[#0a1a4e] text-[#0a1a4e] px-5 py-3 rounded font-semibold">Join Training</button>
          </div>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
            <Stat label="Support load reduced" value="60%" />
            <Stat label="Performance boost" value="40%" />
            <Stat label="Manual tasks cut" value="70%" />
            <Stat label="Faster decisions" value="Real-time" />
          </div>
        </div>

        <div className="flex-1">
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <h3 className="font-semibold text-lg">Get Started</h3>
            <p className="text-sm text-slate-600 mt-2">Quick contact form to request a call or demo.</p>
            <form className="mt-4 space-y-3" onSubmit={(e) => { e.preventDefault(); openModal('contact'); }}>
              <input name="name" placeholder="Your name" className="w-full border px-3 py-2 rounded" />
              <input name="email" placeholder="Email address" className="w-full border px-3 py-2 rounded" />
              <div className="flex gap-2">
                <button className="flex-1 bg-[#0a1a4e] text-white px-4 py-2 rounded">Contact</button>
                <button type="button" onClick={() => openModal('careers')} className="flex-1 border border-[#0a1a4e] px-4 py-2 rounded">Apply Job</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  );
}
