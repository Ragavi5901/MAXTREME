import React from 'react';

const PageHeader = ({ title, subtitle }) => {
  return (
    <div className="relative bg-brand-darker py-24 border-b border-gray-800 overflow-hidden">
      {/* Background styling */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-darker via-brand-darker/90 to-brand-darker/50 z-10"></div>
        {/* Optional pattern or generic industrial background could go here */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-800 via-brand-darker to-brand-darker z-0"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center animate-fade-in-up">
        <div className="inline-flex items-center justify-center gap-2 px-3 py-1.5 rounded-full bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/20 text-xs font-bold tracking-widest uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-brand-yellow"></span>
          Maxtreme Engineering
        </div>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-gray-400 font-light max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
