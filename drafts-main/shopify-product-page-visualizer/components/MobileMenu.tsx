import React, { useEffect, useRef } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigate: (view: string) => void;
  currentView: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navigate, currentView }) => {
  const firstButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }

    if (isOpen) {
      document.addEventListener('keydown', onKey);
      document.body.style.overflow = 'hidden';
      setTimeout(() => firstButtonRef.current?.focus(), 50);
    } else {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-[2000] bg-white p-6 overflow-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="text-xl font-bold">PAY THE DØLLS™</div>
        <button aria-label="Close menu" onClick={onClose} className="px-3 py-2 rounded border">Close</button>
      </div>

      <nav className="flex flex-col gap-4">
        <button ref={firstButtonRef} onClick={() => { navigate('collections'); onClose(); }} className={`text-left px-4 py-3 rounded ${currentView === 'collections' ? 'bg-brand-light' : ''}`}>Shop</button>
        <button onClick={() => { navigate('brands'); onClose(); }} className={`text-left px-4 py-3 rounded ${currentView === 'brands' ? 'bg-brand-light' : ''}`}>Brands</button>
        <button onClick={() => { navigate('verse'); onClose(); }} className={`text-left px-4 py-3 rounded ${currentView === 'verse' ? 'bg-brand-light' : ''}`}>Verse</button>
        <button onClick={() => { navigate('mission'); onClose(); }} className={`text-left px-4 py-3 rounded ${currentView === 'mission' ? 'bg-brand-light' : ''}`}>Mission</button>
        <button onClick={() => { navigate('submit'); onClose(); }} className={`text-left px-4 py-3 rounded ${currentView === 'submit' ? 'bg-brand-light' : ''}`}>Submit</button>
        <button onClick={() => { navigate('about'); onClose(); }} className={`text-left px-4 py-3 rounded ${currentView === 'about' ? 'bg-brand-light' : ''}`}>About</button>
        <button onClick={() => { navigate('contact'); onClose(); }} className={`text-left px-4 py-3 rounded ${currentView === 'contact' ? 'bg-brand-light' : ''}`}>Contact</button>
      </nav>

      <div className="mt-8 text-sm text-gray-600">Tap a link to navigate. Press Esc to close.</div>
    </div>
  );
};
