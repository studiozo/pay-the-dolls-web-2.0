import React from 'react';

export const WireframePage: React.FC = () => {
  return (
    <div className="wireframe max-w-[1200px] mx-auto py-12 px-6">
      <header className="mb-8">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">PAY THE DØLLS™</div>
          <nav className="flex gap-4">
            <button className="px-3 py-2 border rounded">SHOP</button>
            <button className="px-3 py-2 border rounded">BRANDS</button>
            <button className="px-3 py-2 border rounded">ABOUT</button>
            <button className="px-3 py-2 border rounded">VERSE</button>
            <button className="px-3 py-2 border rounded">SUBMIT</button>
          </nav>
        </div>
      </header>

      <section className="mb-8">
        <div className="bg-gray-100 border border-dashed border-gray-300 p-8">
          <h2 className="text-3xl font-bold mb-3">Visual Mockup (Wireframe)</h2>
          <p className="text-sm text-gray-600 mb-4">This page shows a simple wireframe/mockup. Clicks should map to the behaviors defined in WIREFRAME.md.</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-span-2">
              <div className="hero bg-white border p-8 mb-6">
                <h3 className="text-2xl font-semibold mb-2">Hero — PAY THE DØLLS™</h3>
                <p className="text-sm text-gray-600">Primary CTA: SHOP (takes user to Collections page)</p>
                <div className="mt-4">
                  <button onClick={() => alert('Intended behavior: navigate to Collections (/collections)')} className="px-6 py-3 bg-brand-neon text-black font-bold rounded">SHOP</button>
                </div>
              </div>

              <div className="collections-grid grid grid-cols-2 gap-4">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="card border p-4 bg-white">
                    <div className="h-36 bg-gray-200 mb-3 flex items-center justify-center">Product Image</div>
                    <div className="font-semibold">Product Title</div>
                    <div className="text-sm text-gray-600">Vendor • $XX.XX</div>
                    <div className="mt-3">
                      <button onClick={() => alert('Intended behavior: open Product page') } className="px-3 py-2 border rounded">Open</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <aside className="hidden md:block">
              <div className="p-4 border bg-white">
                <h4 className="font-semibold mb-2">Interaction notes</h4>
                <ul className="text-sm text-gray-700 list-disc pl-4">
                  <li>SHOP opens /collections (Collections view).</li>
                  <li>Product card open navigates to Product detail.</li>
                  <li>VERSE opens Mission page (protocol docs).</li>
                  <li>SUBMIT opens the submit form page (save contact + pitch).</li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <footer className="mt-10 text-sm text-gray-600">
        Footer placeholder — © PAY THE DØLLS™
      </footer>
    </div>
  );
};
