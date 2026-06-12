import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-brand-darker pt-20 pb-10 border-t border-gray-900 text-gray-400 relative overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-yellow via-red-600 to-brand-darker opacity-80"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        
        {/* Company Info - Col span 2 */}
        <div className="lg:col-span-2 pr-0 lg:pr-12">
           <Image src="/image/logo.png" alt="MAXTREME Logo" width={220} height={70} className="h-16 w-auto object-contain mb-8" priority />
          <p className="leading-relaxed text-sm mb-8 text-gray-400">
            We specialize in engineering, project management, installation, and commissioning services for diverse industrial and turnkey projects.
          </p>
          <div className="flex items-start gap-3 text-sm">
            <div className="mt-0.5">
              <svg className="w-5 h-5 text-brand-yellow flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            </div>
            <p>
              <strong className="text-gray-200 font-medium block mb-1">MAXTREME Engineering (P) Ltd</strong>
              No: 110, 2nd Floor, Mugalivakkam Main Road,<br/>
              Madhanandapuram, Porur,<br/>
              Chennai - 600 125
            </p>
          </div>
        </div>
        
        {/* Products - Col span 1 */}
        <div>
          <h3 className="text-white text-base font-semibold mb-8 tracking-wider uppercase">Products</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="/products/power-transmission" className="hover:text-brand-yellow transition-colors inline-block">Power Transmission</a></li>
            <li>
              <span className="text-gray-300 font-medium inline-block mb-3">Fluid Handling</span>
              <ul className="space-y-3 pl-4 border-l border-gray-800 text-gray-400">
                <li><a href="/products/aodd-pumps" className="hover:text-brand-yellow transition-colors inline-block">Aodd Pumps</a></li>
                <li><a href="/products/pdp" className="hover:text-brand-yellow transition-colors inline-block">Positive Displacement</a></li>
                <li><a href="/products/centrifugal-pumps" className="hover:text-brand-yellow transition-colors inline-block">Centrifugal Pumps</a></li>
                <li><a href="/products/dosing" className="hover:text-brand-yellow transition-colors inline-block">Dosing Pumps</a></li>
                <li><a href="/products/industrial-valves" className="hover:text-brand-yellow transition-colors inline-block">Industrial Valves</a></li>
              </ul>
            </li>
          </ul>
        </div>

        {/* Quick Links - Col span 1 */}
        <div>
          <h3 className="text-white text-base font-semibold mb-8 tracking-wider uppercase">Quick Links</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="/" className="hover:text-brand-yellow transition-colors inline-block">Home</a></li>
            <li><a href="/projects" className="hover:text-brand-yellow transition-colors inline-block">Projects</a></li>
            <li><a href="/contact" className="hover:text-brand-yellow transition-colors inline-block">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact Us - Col span 1 */}
        <div>
          <h3 className="text-white text-base font-semibold mb-8 tracking-wider uppercase">Contact Us</h3>
          <div className="space-y-6 text-sm">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-brand-yellow mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span className="text-gray-300 leading-relaxed block pt-0.5">
                044 43556213<br/>
                +91 9092759901<br/>
                +91 9566117047
              </span>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-brand-yellow mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span className="flex flex-col gap-1 pt-0.5">
                <a href="mailto:sales@maxtreme.in" className="hover:text-brand-yellow transition-colors text-gray-300">sales@maxtreme.in</a>
                <a href="mailto:info@maxtreme.in" className="hover:text-brand-yellow transition-colors text-gray-300">info@maxtreme.in</a>
              </span>
            </div>
          </div>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center md:text-left text-xs border-t border-gray-800/80 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-gray-500">&copy; {new Date().getFullYear()} MAXTREME Engineering (P) Ltd. All rights reserved.</span>
          <div className="flex gap-6 text-gray-500">
            <a href="#" className="hover:text-brand-yellow transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-brand-yellow transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
