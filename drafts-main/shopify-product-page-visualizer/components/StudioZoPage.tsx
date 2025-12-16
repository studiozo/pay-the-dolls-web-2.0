import React from 'react';

export const StudioZoPage: React.FC = () => {
  return (
    <div className="studiozo-page max-w-5xl mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-4">STuDiØ ZØ Print Lab</h1>
      <p className="text-gray-700 mb-6">Prints and merch from the lab — placeholder for drafts preview.</p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="p-4 border">Print {i + 1}</div>
        ))}
      </div>
    </div>
  );
};