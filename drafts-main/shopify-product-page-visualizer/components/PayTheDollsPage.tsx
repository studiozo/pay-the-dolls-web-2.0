import React from 'react';

interface Props {
  onNavigate?: (view: string) => void;
}

export const PayTheDollsPage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="ptd-page max-w-5xl mx-auto py-20 px-6">
      <button onClick={() => onNavigate?.('brands')} className="mb-6 px-4 py-2 border rounded">← Back to Brands</button>
      <h1 className="text-4xl font-bold mb-4">PAY THE DØLLS™</h1>
      <p className="text-gray-700 mb-6">Placeholder Pay The Dølls brand page for the drafts preview. Replace with canonical component when ready.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 border">Merch item 1</div>
        <div className="p-4 border">Merch item 2</div>
        <div className="p-4 border">Merch item 3</div>
      </div>
    </div>
  );
};