import React from 'react';

interface Props {
  onNavigate?: (view: string) => void;
}

export const ContactPage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="contact max-w-[900px] mx-auto py-20 px-6 md:px-12 text-center">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>
      <p className="text-[#555] mb-6">Questions, press, partnerships, or general inquiries — reach out.</p>

      <div className="text-left max-w-[700px] mx-auto">
        <p className="mb-4"><strong>Email:</strong> <a href="mailto:hello@paythedolls.com" className="text-brand-neon">hello@paythedolls.com</a></p>
        <p className="mb-4"><strong>Press:</strong> <a href="mailto:press@paythedolls.com" className="text-brand-neon">press@paythedolls.com</a></p>
        <p className="mb-4">Or use the form on the live site to get in touch — this is a placeholder page for the visualizer.</p>
        <div className="mt-6">
          <button onClick={() => onNavigate && onNavigate('home')} className="px-4 py-2 border rounded">Back to Home</button>
        </div>
      </div>
    </div>
  );
};