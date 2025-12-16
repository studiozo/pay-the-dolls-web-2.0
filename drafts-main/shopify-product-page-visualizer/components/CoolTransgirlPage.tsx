import React from 'react';

interface Props {
  onNavigate?: (view: string) => void;
}

export const CoolTransgirlPage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="ctg-page max-w-4xl mx-auto py-20 px-6">
      <button onClick={() => onNavigate?.('brands')} className="mb-6 px-4 py-2 border rounded">← Back to Brands</button>
      <h1 className="text-3xl font-bold mb-4">Cool Transgirl</h1>
      <p className="text-gray-700">Placeholder for Cool Transgirl brand content.</p>
    </div>
  );
};