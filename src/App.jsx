import React from 'react';
import Home from './pages/Home';
import { ModalProvider } from './context/ModalContext';

export default function App() {
  return (
    <ModalProvider>
      <Home />
    </ModalProvider>
  );
}
