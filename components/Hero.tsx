import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-[#D7D7D7] font-sans overflow-hidden">
      
      {/* ========================================================= */}
      {/* 🖥️ DESKTOP LAYOUT */}
      {/* ========================================================= */}
      <div className="hidden md:flex w-full min-h-screen relative">
        
        {/* ── বাম দিকের ধূসর অংশ (Text Side) ── */}
        <div className="w-[48%] flex flex-col justify-between p-10 lg:p-16 xl:p-20 z-10">
          
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-black tracking-tighter text-black border-2 border-black px-2.5 py-0.5">
              MB
            </span>
          </div>

          {/* Text Content */}
          <div className="my-auto py-8">
            <p className="text-xl lg:text-2xl font-medium text-black mb-2">
              Hi, I am
            </p>
            <h1 className="text-5xl lg:text-7xl font-extrabold text-black tracking-tight mb-3">
              Maruf Billah
            </h1>
            <p className="text-gray-600 font-medium text-base lg:text-lg mb-8">
              Front-end Developer / UI Designer
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="#contact"
                aria-label="Email"
                className="w-12 h-12 rounded-sm bg-[#C4C4C4] hover:bg-gray-300 flex items-center justify-center text-black font-bold text-xl shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.8),inset_2px_2px_4px_rgba(0,0,0,0.2)] transition"
              >
                @
              </a>
              <a
                href="https://github.com/dev-marufbillah"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-sm bg-[#C4C4C4] hover:bg-gray-300 flex items-center justify-center text-black shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.8),inset_2px_2px_4px_rgba(0,0,0,0.2)] transition"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/dev-marufbillah/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-sm bg-[#C4C4C4] hover:bg-gray-300 flex items-center justify-center text-black shadow-[inset_-2px_-2px_4px_rgba(255,255,255,0.8),inset_2px_2px_4px_rgba(0,0,0,0.2)] transition"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          <div></div>
        </div>

        {/* ── ডান দিকের অংশ: পুরো ব্যাকগ্রাউন্ড কালো + ছবি একদম উপর পর্যন্ত ── */}
        <div className="absolute top-0 right-0 bottom-0 w-[58%] bg-black [clip-path:polygon(16%_0,100%_0,100%_100%,0%_100%)] overflow-hidden">
          <Image
            src="/images/profile.jpg"
            alt="Maruf Billah"
            fill
            priority
            className="object-cover object-top"
          />
        </div>
      </div>

      {/* ========================================================= */}
      {/* 📱 MOBILE LAYOUT */}
      {/* ========================================================= */}
      <div className="flex md:hidden flex-col w-full h-[100svh] bg-black relative justify-between overflow-hidden">
        
        {/* Mobile Header Logo */}
        <div className="flex justify-between items-center p-6 z-20">
          <span className="text-white font-black text-lg tracking-tighter border-2 border-white px-2 py-0.5">
            MB
          </span>
        </div>

        {/* Mobile Full Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/profile.jpg"
            alt="Maruf Billah"
            fill
            priority
            className="object-cover object-top opacity-90"
          />
        </div>

        {/* Mobile Bottom Slanted Card */}
        <div className="relative z-10 w-full mt-auto bg-[#1A1A1A]/90 backdrop-blur-md p-6 pt-8 pb-8 flex justify-between items-end [clip-path:polygon(0_15%,100%_0,100%_100%,0%_100%)] border-t border-white/10">
          <div className="flex flex-col text-white gap-1 pr-2">
            <p className="text-xs text-gray-400 tracking-wider uppercase font-medium">Hi, I am</p>
            <h1 className="text-3xl font-extrabold tracking-tight text-white">Maruf Billah</h1>
            <p className="text-xs text-gray-400 font-normal">Front-end Developer / UI Designer</p>
          </div>

          <div className="flex flex-col gap-2.5">
            <a href="#contact" className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center text-white text-xs hover:bg-white hover:text-black transition">@</a>
            <a href="#" className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-black transition">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-black transition">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}