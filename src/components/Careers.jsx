import React from 'react';
import CareerCard from './common/CareerCard';
import { useModal } from '../context/ModalContext';

export default function Careers() {
  const { openModal } = useModal();
  return (
    <section id="careers" className="bg-[#eef3ff] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Careers</h2>
        <p className="mt-2 text-slate-600">Join our team and help build the future with cutting-edge technology.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <CareerCard title="AI Engineer" onApply={() => openModal('careers')} />
          <CareerCard title="Full Stack Developer" onApply={() => openModal('careers')} />
          <CareerCard title="Cloud Architect" onApply={() => openModal('careers')} />
          <CareerCard title="Data Analyst" onApply={() => openModal('careers')} />
        </div>
      </div>
    </section>
  );
}
