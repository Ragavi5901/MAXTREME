import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-brand-darker pt-20 pb-10 border-t border-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        <div className="col-span-1 md:col-span-2 pr-0 md:pr-12">
           <Image src="/image/logo.png" alt="MAXTREME Logo" width={200} height={60} className="h-12 w-auto object-contain mb-8 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer" />
          <p className="leading-relaxed text-sm max-w-sm mb-8">
            We specialize in engineering, project management, installation, and commissioning services for diverse industrial and turnkey projects.
          </p>
          <div className="flex items-start gap-3 text-sm">
            <svg className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
            <p>
              <strong className="text-gray-300 font-semibold">MAXTREME Engineering (P) Ltd</strong><br/>
              No: 110, 2nd Floor, Mugalivakkam Main Road,<br/>
              Madhanandapuram, Porur,<br/>
              Chennai - 600 125
            </p>
          </div>
        </div>
        
        <div>
          <h3 className="text-white text-sm font-bold mb-8 tracking-widest uppercase">Contact Us</h3>
          <div className="space-y-6 text-sm">
            <p className="flex items-start gap-3">
              <svg className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              <span>044 43556213<br/>+91 9092759901<br/>+91 9566117047</span>
            </p>
            <p className="flex items-start gap-3">
              <svg className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              <span className="flex flex-col gap-1">
                <a href="mailto:sales@maxtreme.in" className="hover:text-brand-yellow transition-colors">sales@maxtreme.in</a>
                <a href="mailto:info@maxtreme" className="hover:text-brand-yellow transition-colors">info@maxtreme</a>
              </span>
            </p>
          </div>
        </div>
        
        <div>
          <h3 className="text-white text-sm font-bold mb-8 tracking-widest uppercase">Quick Links</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="/" className="hover:text-brand-yellow transition-colors inline-block">Home</a></li>
            <li><a href="/products" className="hover:text-brand-yellow transition-colors inline-block">Products</a></li>
            <li><a href="/projects" className="hover:text-brand-yellow transition-colors inline-block">Projects</a></li>
            <li><a href="/contact" className="hover:text-brand-yellow transition-colors inline-block">Contact Us</a></li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center md:text-left text-xs border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <span>&copy; {new Date().getFullYear()} MAXTREME Engineering (P) Ltd. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
