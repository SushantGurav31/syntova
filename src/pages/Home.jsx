import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import CaseStudies from '../components/CaseStudies';
import Blog from '../components/Blog';
import Careers from '../components/Careers';
import Footer from '../components/Footer';
import Modal from '../components/common/Modal';
import Toast from '../components/common/Toast';
import { useModal } from '../context/ModalContext';

export default function Home() {
  const { modal } = useModal();
  const [toast, setToast] = useState('');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      <Navbar />
      <Hero />
      <main>
        <About />
        <Products />
        <CaseStudies />
        <Blog />
        <Careers />
      </main>
      <Footer />

      {modal.open && <Modal setToast={setToast} />}
      {toast && <Toast message={toast} onClose={() => setToast('')} />}
    </div>
  );
}
