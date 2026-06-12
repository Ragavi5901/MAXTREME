'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenus, setOpenSubmenus] = useState({});

  const toggleSubmenu = (key) => {
    setOpenSubmenus(prev => ({ ...prev, [key]: !prev[key] }));
  };

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

            {/* Mobile Menu Button */}
            <div className="flex sm:hidden items-center ml-auto">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-brand-yellow focus:outline-none p-2"
                aria-label="Toggle menu"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0 z-50">
          <div className="px-4 pt-2 pb-6 space-y-2 max-h-[80vh] overflow-y-auto">
            <Link href="/" className="block px-3 py-3 text-base font-semibold text-gray-700 hover:text-brand-yellow hover:bg-gray-50 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
              Home
            </Link>
            
            <div className="py-2">
              <button 
                onClick={() => toggleSubmenu('products')}
                className="w-full flex justify-between items-center px-3 py-2 text-base font-semibold text-gray-700 hover:text-brand-yellow hover:bg-gray-50 rounded-md"
              >
                Products
                <svg className={`w-5 h-5 transition-transform ${openSubmenus['products'] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>
              
              {openSubmenus['products'] && (
                <div className="pl-6 space-y-2 border-l-2 border-gray-100 ml-4 mt-2">
                  <Link href="/products/power-transmission" className="block py-2 text-sm text-gray-600 hover:text-brand-yellow" onClick={() => setIsMobileMenuOpen(false)}>Power Transmission</Link>
                  
                  <div className="py-1">
                    <button 
                      onClick={() => toggleSubmenu('fluidHandling')}
                      className="w-full flex justify-between items-center py-1 text-sm font-medium text-gray-700 hover:text-brand-yellow"
                    >
                      Fluid Handling
                      <svg className={`w-4 h-4 transition-transform ${openSubmenus['fluidHandling'] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                    </button>
                    
                    {openSubmenus['fluidHandling'] && (
                      <div className="pl-4 space-y-2 mt-1 border-l border-gray-100">
                        <Link href="/products/aodd-pumps" className="block py-1 text-sm text-gray-600 hover:text-brand-yellow" onClick={() => setIsMobileMenuOpen(false)}>Aodd Pumps</Link>
                        
                        <div className="py-1">
                          <button 
                            onClick={() => toggleSubmenu('pdp')}
                            className="w-full flex justify-between items-center py-1 text-sm font-medium text-gray-700 hover:text-brand-yellow"
                          >
                            Positive Displacement Pumps
                            <svg className={`w-4 h-4 transition-transform ${openSubmenus['pdp'] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                          </button>
                          
                          {openSubmenus['pdp'] && (
                            <div className="pl-4 space-y-2 mt-1 border-l border-gray-100">
                              <Link href="/products/pdp/single-screw" className="block py-1 text-xs text-gray-600 hover:text-brand-yellow" onClick={() => setIsMobileMenuOpen(false)}>Single Screw Pump</Link>
                              <Link href="/products/pdp/twin-screw" className="block py-1 text-xs text-gray-600 hover:text-brand-yellow" onClick={() => setIsMobileMenuOpen(false)}>Twin Screw Pump</Link>
                              <Link href="/products/pdp/three-screw" className="block py-1 text-xs text-gray-600 hover:text-brand-yellow" onClick={() => setIsMobileMenuOpen(false)}>Three Screw pump</Link>
                              <Link href="/products/pdp/internal-shuttle" className="block py-1 text-xs text-gray-600 hover:text-brand-yellow" onClick={() => setIsMobileMenuOpen(false)}>Internal & Shuttle Block Pump</Link>
                              <Link href="/products/pdp/external-gear" className="block py-1 text-xs text-gray-600 hover:text-brand-yellow" onClick={() => setIsMobileMenuOpen(false)}>External Gear Pump</Link>
                              <Link href="/products/pdp/rotary-trochoidal" className="block py-1 text-xs text-gray-600 hover:text-brand-yellow" onClick={() => setIsMobileMenuOpen(false)}>Rotary Trochoidal Gear Pump</Link>
                            </div>
                          )}
                        </div>
                        
                        <Link href="/products/centrifugal-pumps" className="block py-1 text-sm text-gray-600 hover:text-brand-yellow" onClick={() => setIsMobileMenuOpen(false)}>Centrifugal Pumps</Link>
                        
                        <div className="py-1">
                          <button 
                            onClick={() => toggleSubmenu('dosing')}
                            className="w-full flex justify-between items-center py-1 text-sm font-medium text-gray-700 hover:text-brand-yellow"
                          >
                            Dosing Pumps
                            <svg className={`w-4 h-4 transition-transform ${openSubmenus['dosing'] ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                          </button>
                          
                          {openSubmenus['dosing'] && (
                            <div className="pl-4 space-y-2 mt-1 border-l border-gray-100">
                              <Link href="/products/dosing/plunger" className="block py-1 text-xs text-gray-600 hover:text-brand-yellow" onClick={() => setIsMobileMenuOpen(false)}>Plunger Type</Link>
                              <Link href="/products/dosing/hydraulic" className="block py-1 text-xs text-gray-600 hover:text-brand-yellow" onClick={() => setIsMobileMenuOpen(false)}>Hydraulic Type</Link>
                              <Link href="/products/dosing/mechanical" className="block py-1 text-xs text-gray-600 hover:text-brand-yellow" onClick={() => setIsMobileMenuOpen(false)}>Mechanical Type</Link>
                              <Link href="/products/dosing/electronic" className="block py-1 text-xs text-gray-600 hover:text-brand-yellow" onClick={() => setIsMobileMenuOpen(false)}>Electronic Type</Link>
                            </div>
                          )}
                        </div>
                        
                        <Link href="/products/industrial-valves" className="block py-1 text-sm text-gray-600 hover:text-brand-yellow" onClick={() => setIsMobileMenuOpen(false)}>Industrial Valves</Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            <Link href="/projects" className="block px-3 py-3 text-base font-semibold text-gray-700 hover:text-brand-yellow hover:bg-gray-50 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
              Projects
            </Link>
            <Link href="/contact" className="block px-3 py-3 text-base font-semibold text-gray-700 hover:text-brand-yellow hover:bg-gray-50 rounded-md" onClick={() => setIsMobileMenuOpen(false)}>
              Contact us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
