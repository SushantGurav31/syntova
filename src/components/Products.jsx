import React from 'react';
import Card from './common/Card';
import { useModal } from '../context/ModalContext';

export default function Products() {
  const { openModal } = useModal();
  return (
    <section id="products" className="bg-slate-50 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Our Products</h2>
        <p className="text-slate-600 mt-2">We build intelligent and scalable digital products for modern businesses.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card title="AI Chatbot Suite" body="Automate customer support with advanced conversational AI." onDemo={() => openModal('demo')} />
          <Card title="CloudOps Dashboard" body="Monitor, optimize and automate cloud infrastructure." onDemo={() => openModal('demo')} />
          <Card title="Data Insights Platform" body="End-to-end analytics solution for real-time decision making." onDemo={() => openModal('demo')} />
          <Card title="Automation Engine" body="Replace manual workflows with AI-powered automation." onDemo={() => openModal('demo')} />
        </div>
      </div>
    </section>
  );
}
