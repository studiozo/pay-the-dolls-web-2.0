import React from 'react';

export const StudioZoPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-mono pt-20 px-10 md:pt-20 md:px-10">
      <style>{`
        .sf-mono { font-family: 'SF Mono', 'Monaco', 'Inconsolata', 'Roboto Mono', 'Consolas', monospace; }
        .title-outline { font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-text-stroke: 2px #ffffff; color: transparent; }
        .product-image { aspect-ratio: 3/4; }
        @media (max-width: 768px) { .title-outline { font-size: 64px; } }
      `}</style>

      <div className="max-w-[1400px] mx-auto">
        {/* Hero Section */}
        <header className="mb-20">
          <div className="w-[200px] h-[3px] bg-[#ff3333] mb-[15px]" />
          <h1 className="title-outline text-[120px] md:text-[120px] font-bold uppercase tracking-tight leading-[0.8] mb-2">
            PRINT LAB
          </h1>
          <p className="sf-mono text-lg tracking-[0.15em] uppercase font-normal">// COMMERCE</p>
        </header>

        {/* Navigation Menu */}
        <nav className="flex flex-col md:flex-row gap-10 md:gap-10 my-16 text-xl font-normal text-[#888888]">
          <a href="#prints" className="hover:text-white transition-colors">Prints.</a>
          <a href="#fashion" className="hover:text-white transition-colors">Fashion.</a>
          <a href="#book" className="hover:text-white transition-colors">Book.</a>
        </nav>

        {/* Description */}
        <section className="max-w-[800px] mb-16">
          <p className="text-lg leading-[1.8] text-[#cccccc] mb-4">We're printing money. Digital artifacts materialized into physical form.</p>
          <p className="text-lg leading-[1.8] text-[#cccccc] mb-4">Each piece is a statement forged from reclaimed materials, vintage fabrics, and hand-crafted details. Sustainable couture meets bold silhouettes that speak without words.</p>
          <a href="#shop" className="inline-block mt-8 px-10 py-4 border border-[#CCFF00] text-[#CCFF00] no-underline text-base font-medium tracking-[0.1em] uppercase transition-all hover:bg-[#CCFF00] hover:text-black">[ SHOP RE.ZØED ]</a>
        </section>

        {/* PRINTS Section */}
        <section className="mt-24" id="prints">
          <div className="border-l-[3px] border-[#ff3333] pl-5 mb-10">
            <div className="text-sm text-[#ff3333] uppercase tracking-[0.15em] mb-2 font-medium">PRINTS:</div>
            <div className="text-lg text-[#aaaaaa] leading-[1.6]">Limited edition art prints. Photographic works. Digital artifacts on archival paper.</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-10 mt-16">
            <div className="bg-black border border-[#1a1a1a] p-5 transition-all hover:border-[#333333]">
              <div className="product-image w-full bg-[#0a0a0a] border border-[#111111] mb-5 flex items-center justify-center text-[#333333] text-xs">PRINT_001</div>
              <div className="flex justify-between items-baseline">
                <div>
                  <div className="text-base font-bold uppercase tracking-tight text-white">STARDUST MANIFESTO</div>
                  <div className="text-[11px] text-[#CCFF00] mt-1 font-normal">PRNT-001</div>
                </div>
                <div className="text-sm text-[#888888] font-normal">$120</div>
              </div>
            </div>

            <div className="bg-black border border-[#1a1a1a] p-5 transition-all hover:border-[#333333]">
              <div className="product-image w-full bg-[#0a0a0a] border border-[#111111] mb-5 flex items-center justify-center text-[#333333] text-xs">PRINT_002</div>
              <div className="flex justify-between items-baseline">
                <div>
                  <div className="text-base font-bold uppercase tracking-tight text-white">DIGITAL DECAY #3</div>
                  <div className="text-[11px] text-[#CCFF00] mt-1 font-normal">PRNT-002</div>
                </div>
                <div className="text-sm text-[#888888] font-normal">$120</div>
              </div>
            </div>

            <div className="bg-black border border-[#1a1a1a] p-5 transition-all hover:border-[#333333]">
              <div className="product-image w-full bg-[#0a0a0a] border border-[#111111] mb-5 flex items-center justify-center text-[#333333] text-xs">PRINT_003</div>
              <div className="flex justify-between items-baseline">
                <div>
                  <div className="text-base font-bold uppercase tracking-tight text-white">VOID VISION</div>
                  <div className="text-[11px] text-[#CCFF00] mt-1 font-normal">PRNT-003</div>
                </div>
                <div className="text-sm text-[#888888] font-normal">$120</div>
              </div>
            </div>
          </div>
        </section>

        {/* FASHION Section */}
        <section className="mt-24" id="fashion">
          <div className="border-l-[3px] border-[#ff3333] pl-5 mb-10">
            <div className="text-sm text-[#ff3333] uppercase tracking-[0.15em] mb-2 font-medium">FASHION:</div>
            <div className="text-lg text-[#aaaaaa] leading-[1.6]">Statements forged from secondhand fabrics, reclaimed textures, and one-of-one storytelling.</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-10 mt-16">
            <div className="bg-black border border-[#1a1a1a] p-5 transition-all hover:border-[#333333]">
              <div className="product-image w-full bg-[#0a0a0a] border border-[#111111] mb-5 flex items-center justify-center text-[#333333] text-xs">JACKET_V03</div>
              <div className="flex justify-between items-baseline">
                <div>
                  <div className="text-base font-bold uppercase tracking-tight text-white">JACKET V.03</div>
                  <div className="text-[11px] text-[#CCFF00] mt-1 font-normal">JKT-003</div>
                </div>
                <div className="text-sm text-[#888888] font-normal">$320</div>
              </div>
            </div>

            <div className="bg-black border border-[#1a1a1a] p-5 transition-all hover:border-[#333333]">
              <div className="product-image w-full bg-[#0a0a0a] border border-[#111111] mb-5 flex items-center justify-center text-[#333333] text-xs">HOODIE_V22</div>
              <div className="flex justify-between items-baseline">
                <div>
                  <div className="text-base font-bold uppercase tracking-tight text-white">HOODIE V.22</div>
                  <div className="text-[11px] text-[#CCFF00] mt-1 font-normal">HDE-022</div>
                </div>
                <div className="text-sm text-[#888888] font-normal">$150</div>
              </div>
            </div>

            <div className="bg-black border border-[#1a1a1a] p-5 transition-all hover:border-[#333333]">
              <div className="product-image w-full bg-[#0a0a0a] border border-[#111111] mb-5 flex items-center justify-center text-[#333333] text-xs">PANTS_V14</div>
              <div className="flex justify-between items-baseline">
                <div>
                  <div className="text-base font-bold uppercase tracking-tight text-white">PANTS V.14</div>
                  <div className="text-[11px] text-[#CCFF00] mt-1 font-normal">PNT-014</div>
                </div>
                <div className="text-sm text-[#888888] font-normal">$200</div>
              </div>
            </div>

            <div className="bg-black border border-[#1a1a1a] p-5 transition-all hover:border-[#333333]">
              <div className="product-image w-full bg-[#0a0a0a] border border-[#111111] mb-5 flex items-center justify-center text-[#333333] text-xs">TEE_V99</div>
              <div className="flex justify-between items-baseline">
                <div>
                  <div className="text-base font-bold uppercase tracking-tight text-white">TEE V.99</div>
                  <div className="text-[11px] text-[#CCFF00] mt-1 font-normal">TEE-099</div>
                </div>
                <div className="text-sm text-[#888888] font-normal">$80</div>
              </div>
            </div>

            <div className="bg-black border border-[#1a1a1a] p-5 transition-all hover:border-[#333333]">
              <div className="product-image w-full bg-[#0a0a0a] border border-[#111111] mb-5 flex items-center justify-center text-[#333333] text-xs">CAP_V01</div>
              <div className="flex justify-between items-baseline">
                <div>
                  <div className="text-base font-bold uppercase tracking-tight text-white">CAP V.01</div>
                  <div className="text-[11px] text-[#CCFF00] mt-1 font-normal">CAP-001</div>
                </div>
                <div className="text-sm text-[#888888] font-normal">$50</div>
              </div>
            </div>

            <div className="bg-black border border-[#1a1a1a] p-5 transition-all hover:border-[#333333]">
              <div className="product-image w-full bg-[#0a0a0a] border border-[#111111] mb-5 flex items-center justify-center text-[#333333] text-xs">BAG_V05</div>
              <div className="flex justify-between items-baseline">
                <div>
                  <div className="text-base font-bold uppercase tracking-tight text-white">BAG V.05</div>
                  <div className="text-[11px] text-[#CCFF00] mt-1 font-normal">BAG-005</div>
                </div>
                <div className="text-sm text-[#888888] font-normal">$120</div>
              </div>
            </div>
          </div>
        </section>

        {/* BOOK Section */}
        <section className="mt-24" id="book">
          <div className="border-l-[3px] border-[#ff3333] pl-5 mb-10">
            <div className="text-sm text-[#ff3333] uppercase tracking-[0.15em] mb-2 font-medium">BOOK:</div>
            <div className="text-lg text-[#aaaaaa] leading-[1.6]">Collaborate with Studio ZØ. Fashion shoots. Creative direction. Custom commissions.</div>
          </div>

          <div className="max-w-[600px] mt-10">
            <p className="text-lg text-[#aaaaaa] leading-[1.8] mb-8">For bookings, collaborations, and custom work:<br /><a href="mailto:zo@studiozonyc.com" className="text-[#CCFF00] no-underline">zo@studiozonyc.com</a></p>
            <a href="mailto:zo@studiozonyc.com" className="inline-block px-10 py-4 border border-[#CCFF00] text-[#CCFF00] no-underline text-base font-medium tracking-[0.1em] uppercase transition-all hover:bg-[#CCFF00] hover:text-black">[ CONTACT US ]</a>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-36 pt-10 border-t border-[#1a1a1a] text-center text-[11px] text-[#666666] tracking-[0.05em] font-normal">
          <p>STUDIO ZØ // PRINT LAB // 2025</p>
          <p className="mt-2">ALL RIGHTS RESERVED // COPYRIGHT</p>
        </footer>
      </div>
    </div>
  );
};