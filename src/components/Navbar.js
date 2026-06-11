import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 text-brand-dark sticky top-0 z-40 transition-all duration-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24">
          <div className="flex items-center w-full">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center mr-12">
              <Link href="/">
                <Image src="/image/logo.png" alt="MAXTREME Logo" width={220} height={70} className="h-14 w-auto object-contain" priority />
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden sm:flex sm:space-x-12 w-full justify-end font-semibold text-[15px] tracking-wide text-gray-700 h-full">
              <Link href="/" className="inline-flex items-center px-1 border-b-2 border-transparent hover:text-brand-yellow-hover hover:border-brand-yellow-hover transition-colors h-full">
                Home
              </Link>
              
              {/* Products Dropdown (Level 1) */}
              <div className="nav-dropdown-item relative flex items-center px-1 border-b-2 border-transparent hover:text-brand-yellow-hover hover:border-brand-yellow-hover transition-colors cursor-pointer h-full group">
                <span className="flex items-center gap-1">Products <svg className="w-4 h-4 text-gray-400 group-hover:text-brand-yellow-hover transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg></span>
                
                <div className="nav-dropdown-menu bg-white rounded-b-xl border border-gray-100 py-3 overflow-visible top-[100%] shadow-lg">
                  <Link href="/products/power-transmission" className="block px-6 py-3 text-sm font-medium text-gray-700 hover:text-brand-yellow-hover hover:bg-gray-50 border-l-2 border-transparent hover:border-brand-yellow transition-all">
                    Power Transmission
                  </Link>
                  
                  {/* Fluid Handling (Level 2) */}
                  <div className="nav-dropdown-subitem relative block px-6 py-3 text-sm font-medium text-gray-700 border-y border-gray-100 border-l-2 border-transparent hover:border-brand-yellow cursor-pointer hover:bg-gray-50 hover:text-brand-yellow-hover transition-all group/sub2">
                    <div className="flex justify-between items-center">
                      Fluid Handling
                      <svg className="w-4 h-4 text-gray-400 group-hover/sub2:text-brand-yellow-hover transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                    </div>
                    
                    <div className="nav-dropdown-submenu bg-gray-50 rounded-xl border border-gray-100 py-2 mr-1 shadow-lg">
                      <Link href="/products/aodd-pumps" className="block px-6 py-3 text-sm font-medium text-gray-700 hover:text-brand-yellow-hover hover:bg-white border-l-2 border-transparent hover:border-brand-yellow transition-all">
                        Aodd Pumps
                      </Link>
                      
                      {/* Positive Displacement Pumps (Level 3) */}
                      <div className="nav-dropdown-subitem relative block px-6 py-3 text-sm font-medium text-gray-700 border-y border-gray-100 border-l-2 border-transparent hover:border-brand-yellow cursor-pointer hover:bg-white hover:text-brand-yellow-hover transition-all group/sub3">
                        <div className="flex justify-between items-center">
                          Positive Displacement Pumps
                          <svg className="w-4 h-4 text-gray-400 group-hover/sub3:text-brand-yellow-hover transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </div>
                        
                        <div className="nav-dropdown-submenu bg-gray-100 rounded-xl border border-gray-200 py-2 mr-1 min-w-[300px] shadow-lg">
                          <Link href="/products/pdp/single-screw" className="block px-6 py-3 text-sm font-medium text-gray-700 hover:text-brand-yellow-hover hover:bg-white border-l-2 border-transparent hover:border-brand-yellow transition-all">Single Screw Pump</Link>
                          <Link href="/products/pdp/twin-screw" className="block px-6 py-3 text-sm font-medium text-gray-700 hover:text-brand-yellow-hover hover:bg-white border-l-2 border-transparent hover:border-brand-yellow transition-all">Twin Screw Pump</Link>
                          <Link href="/products/pdp/three-screw" className="block px-6 py-3 text-sm font-medium text-gray-700 hover:text-brand-yellow-hover hover:bg-white border-l-2 border-transparent hover:border-brand-yellow transition-all">Three Screw pump</Link>
                          <Link href="/products/pdp/internal-shuttle" className="block px-6 py-3 text-sm font-medium text-gray-700 hover:text-brand-yellow-hover hover:bg-white border-l-2 border-transparent hover:border-brand-yellow transition-all">Internal & Shuttle Block Pump</Link>
                          <Link href="/products/pdp/external-gear" className="block px-6 py-3 text-sm font-medium text-gray-700 hover:text-brand-yellow-hover hover:bg-white border-l-2 border-transparent hover:border-brand-yellow transition-all">External Gear Pump</Link>
                          <Link href="/products/pdp/rotary-trochoidal" className="block px-6 py-3 text-sm font-medium text-gray-700 hover:text-brand-yellow-hover hover:bg-white border-l-2 border-transparent hover:border-brand-yellow transition-all">Rotary Trochoidal Gear Pump</Link>
                        </div>
                      </div>
                      
                      <Link href="/products/centrifugal-pumps" className="block px-6 py-3 text-sm font-medium text-gray-700 hover:text-brand-yellow-hover hover:bg-white border-l-2 border-transparent hover:border-brand-yellow transition-all">
                        Centrifugal Pumps
                      </Link>
                      
                      {/* Dosing Pumps (Level 3) */}
                      <div className="nav-dropdown-subitem relative block px-6 py-3 text-sm font-medium text-gray-700 border-y border-gray-100 border-l-2 border-transparent hover:border-brand-yellow cursor-pointer hover:bg-white hover:text-brand-yellow-hover transition-all group/sub4">
                        <div className="flex justify-between items-center">
                          Dosing Pumps
                          <svg className="w-4 h-4 text-gray-400 group-hover/sub4:text-brand-yellow-hover transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                        </div>
                        
                        <div className="nav-dropdown-submenu bg-gray-100 rounded-xl border border-gray-200 py-2 mr-1 min-w-[240px] shadow-lg">
                          <Link href="/products/dosing/plunger" className="block px-6 py-3 text-sm font-medium text-gray-700 hover:text-brand-yellow-hover hover:bg-white border-l-2 border-transparent hover:border-brand-yellow transition-all">Plunger Type</Link>
                          <Link href="/products/dosing/hydraulic" className="block px-6 py-3 text-sm font-medium text-gray-700 hover:text-brand-yellow-hover hover:bg-white border-l-2 border-transparent hover:border-brand-yellow transition-all">Hydraulic Type</Link>
                          <Link href="/products/dosing/mechanical" className="block px-6 py-3 text-sm font-medium text-gray-700 hover:text-brand-yellow-hover hover:bg-white border-l-2 border-transparent hover:border-brand-yellow transition-all">Mechanical Type</Link>
                          <Link href="/products/dosing/electronic" className="block px-6 py-3 text-sm font-medium text-gray-700 hover:text-brand-yellow-hover hover:bg-white border-l-2 border-transparent hover:border-brand-yellow transition-all">Electronic Type</Link>
                        </div>
                      </div>
                      
                      <Link href="/products/industrial-valves" className="block px-6 py-3 text-sm font-medium text-gray-700 hover:text-brand-yellow-hover hover:bg-white border-l-2 border-transparent hover:border-brand-yellow transition-all rounded-b-lg">
                        Industrial Valves
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/projects" className="inline-flex items-center px-1 border-b-2 border-transparent hover:text-brand-yellow-hover hover:border-brand-yellow-hover transition-colors h-full">
                Projects
              </Link>
              <Link href="/contact" className="inline-flex items-center px-1 border-b-2 border-transparent hover:text-brand-yellow-hover hover:border-brand-yellow-hover transition-colors h-full">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
