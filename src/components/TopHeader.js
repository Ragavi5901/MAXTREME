import React from 'react';

const TopHeader = () => {
  return (
    <div className="bg-brand-darker text-gray-400 text-[11px] uppercase tracking-widest py-2 px-4 sm:px-6 lg:px-8 hidden md:flex flex-col md:flex-row justify-between items-center gap-2">
      <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left font-semibold">
         <span className="hover:text-white transition-colors cursor-default flex items-center gap-2">
           <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
           044 43556213 / +91 9092759901
         </span>
         <span className="hidden sm:inline text-gray-700">|</span>
         <a href="mailto:sales@maxtreme.in" className="hover:text-white transition-colors flex items-center gap-2">
           <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
           sales@maxtreme.in
         </a>
      </div>
      <div className="text-center md:text-right font-semibold flex items-center gap-2">
         <svg className="w-3 h-3 hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
         No: 110, 2nd Floor, Mugalivakkam Main Road, Chennai - 600 125
      </div>
    </div>
  );
};

export default TopHeader;
