import React from 'react';

const Partners = () => {
  return (
    <section className="bg-white py-20 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold tracking-[0.25em] text-gray-400 uppercase mb-12">
          Exclusive Channel Partners For
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center">
          
          {/* STM Team */}
          <div className="flex items-center gap-4 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 cursor-pointer">
            <div className="w-12 h-12 rounded-full bg-[#ff6600] flex items-center justify-center shadow-md">
              <span className="text-white font-black text-sm italic tracking-tighter">STM</span>
            </div>
            <span className="font-black text-2xl text-gray-900 tracking-tight">STM team</span>
          </div>

          {/* Hindustan Electric Motors */}
          <div className="flex items-center gap-4 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 cursor-pointer">
            <div className="w-12 h-12 bg-[#e60000] flex items-center justify-center text-white font-black tracking-tighter text-lg shadow-md">
              HM
            </div>
            <div className="flex flex-col">
              <span className="font-black text-2xl leading-none text-gray-900 tracking-tight">HINDUSTAN</span>
              <span className="font-bold text-[10px] leading-none text-gray-500 tracking-widest mt-1.5">ELECTRIC MOTORS</span>
            </div>
          </div>

          {/* Delta Pumps */}
          <div className="flex items-center gap-4 grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100 cursor-pointer">
            <div className="border-2 border-[#3333cc] px-4 py-1.5 flex items-center gap-2 rounded-sm">
              <span className="text-[#3333cc] font-black text-2xl tracking-tighter">delta</span>
              <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-[#3333cc]"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm text-gray-900 leading-none">Delta P D Pumps</span>
              <span className="font-medium text-[10px] text-gray-500 mt-1">Pvt. Ltd.</span>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Partners;
