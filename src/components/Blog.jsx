import React from 'react';
import Card from './common/Card';

export default function Blog() {
  return (
    <section id="blog" className="py-12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold">Blog / Insights</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card title="How AI is Transforming Businesses" body="Explore real-world applications of AI." />
          <Card title="Cloud Migration Strategies" body="Best practices for moving to cloud." />
          <Card title="Data Analytics for Growth" body="How data-driven insights improve decisions." />
        </div>
      </div>
    </section>
  );
}
