import React, { useState } from 'react';
import { useModal } from '../../context/ModalContext';

export default function Modal({ setToast }) {
  const { modal, closeModal } = useModal();
  const [formData, setFormData] = useState({ name: '', email: '', message: '', role: '', resume: null });

  function handleChange(e) {
    const { name, value, files } = e.target;
    if (files) setFormData((s) => ({ ...s, [name]: files[0] }));
    else setFormData((s) => ({ ...s, [name]: value }));
  }

  function submitForm(e) {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      setToast('Please fill name and email.');
      return;
    }
    setToast('Submitted successfully! We\'ll contact you soon.');
    setTimeout(() => {
      setToast('');
      closeModal();
    }, 1800);
  }

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-lg w-full max-w-xl p-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">{modal.type === 'contact' ? 'Contact Us' : modal.type === 'training' ? 'Training Signup' : modal.type === 'careers' ? 'Job Application' : 'Request Demo'}</h3>
          <button onClick={closeModal} className="text-slate-500">Close</button>
        </div>

        <form className="mt-4 space-y-3" onSubmit={submitForm}>
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Full name" className="w-full border px-3 py-2 rounded" />
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full border px-3 py-2 rounded" />

          {modal.type === 'careers' && (
            <>
              <select name="role" value={formData.role} onChange={handleChange} className="w-full border px-3 py-2 rounded">
                <option value="">Select role</option>
                <option>AI Engineer</option>
                <option>Full Stack Developer</option>
                <option>Data Analyst</option>
              </select>
              <label className="block text-sm">Upload Resume (optional)</label>
              <input type="file" name="resume" onChange={handleChange} className="w-full" />
            </>
          )}

          {modal.type === 'demo' && (
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us what you'd like to see in the demo" className="w-full border px-3 py-2 rounded" />
          )}

          <div className="flex gap-3">
            <button type="submit" className="bg-[#0a1a4e] text-white px-4 py-2 rounded">Submit</button>
            <button type="button" onClick={closeModal} className="border px-4 py-2 rounded">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
}
