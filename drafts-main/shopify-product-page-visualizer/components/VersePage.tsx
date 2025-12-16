import React from 'react';

interface Props {
  onNavigate?: (view: string) => void;
}

export const VersePage: React.FC<Props> = ({ onNavigate }) => {
  return (
    <div className="verse max-w-[900px] mx-auto py-20 px-6 md:px-12 text-center">
      <h1 className="text-4xl font-bold mb-6">VERSE CAPITAL</h1>
      <p className="text-[#555] mb-6">Information about Verse Capital and partnership details.</p>
      <div className="text-left max-w-[700px] mx-auto">
        <h3 className="font-semibold mb-2">About Verse</h3>
        <p className="mb-4">Verse Capital is a partner project that helps fund creators and projects on our platform. We'll add more details and links here as the site evolves.</p>
        <div className="mt-6">
          <button onClick={() => onNavigate && onNavigate('mission')} className="px-4 py-2 border rounded">See Mission</button>
        </div>
      </div>
    </div>
  );
};