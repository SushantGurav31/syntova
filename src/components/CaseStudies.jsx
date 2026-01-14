import React from 'react';
import Card from './common/Card';

export default function CaseStudies() {
  return (
    <section id="casestudies" className="bg-[#eef3ff] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Case Studies</h2>
        <p className="text-slate-600 mt-2">Explore how we help businesses grow with AI, Cloud, and Automation solutions.</p>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card title="E-Commerce Chatbot" body="Reduced customer support workload by 60%." />
          <Card title="FinTech Cloud Migration" body="Achieved 40% faster performance." />
          <Card title="Healthcare Predictive Analytics" body="Enabled early diagnosis using ML." />
          <Card title="Manufacturing Automation" body="Eliminated 70% manual tasks." />
        </div>
      </div>
    </section>
  );
}
