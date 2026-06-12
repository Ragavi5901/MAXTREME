import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative bg-brand-darker pt-24 pb-32 lg:pt-36 lg:pb-48 overflow-hidden border-b border-gray-800">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-darker via-brand-darker/90 to-brand-darker/30 z-10"></div>
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <Image 
          src="/hero-bg.png" 
          alt="Industrial Engineering Facility" 
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-yellow/20 border border-brand-yellow/30 text-xs font-bold tracking-widest uppercase mb-8 text-white">
            <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse shadow-[0_0_8px_rgba(248,113,113,0.8)]"></span>
            Engineering Excellence
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-8 leading-[1.1]">
            Setting new standards in the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-red-400">industrial</span> sector.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl font-light">
            At <strong className="font-semibold text-white">MAXTREME</strong>, we specialize in engineering, project management, installation, and commissioning. As authorized distributors for premium fluid handling and power transmission equipment, our seasoned professionals deliver turnkey solutions that exceed expectations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#products" className="inline-flex justify-center items-center px-8 py-4 text-sm font-bold uppercase tracking-wider rounded-md text-white bg-brand-yellow hover:bg-brand-yellow-hover transition-all shadow-[0_0_20px_rgba(185,28,28,0.4)] hover:shadow-[0_0_30px_rgba(185,28,28,0.6)] hover:-translate-y-0.5">
              Explore Products
            </a>
            <a href="/contact" className="inline-flex justify-center items-center px-8 py-4 text-sm font-bold uppercase tracking-wider rounded-md text-white bg-white/5 hover:bg-white/10 border border-white/20 transition-all backdrop-blur-md">
              Contact Sales
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
