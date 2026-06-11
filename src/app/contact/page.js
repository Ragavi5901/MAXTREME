import React from 'react';
import PageHeader from '../../components/PageHeader';

export const metadata = {
  title: 'Contact Us | MAXTREME Engineering',
  description: 'Get in touch with MAXTREME Engineering for sales inquiries, technical support, and project consulting.',
};

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader 
        title="Contact Us" 
        subtitle="We're here to answer any questions you have about our products, engineering solutions, or turnkey services."
      />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <div className="space-y-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
                <p className="text-gray-600 font-light">
                  Whether you need a quick quote on a pump or a full consultation for an industrial pipeline, our dedicated team is ready to assist you.
                </p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-yellow border border-gray-200 shadow-sm flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Corporate Office</h3>
                    <p className="text-gray-600">Maxtreme Engineering (P) Ltd<br/>No: 110, 2nd Floor, Mugalivakkam Main Road,<br/>Madhanandapuram, Porur,<br/>Chennai - 600 125</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-yellow border border-gray-200 shadow-sm flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Phone</h3>
                    <p className="text-gray-600">044 43556213</p>
                    <p className="text-gray-600">+91 9092759901</p>
                    <p className="text-gray-600">+91 9566117047</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-brand-yellow border border-gray-200 shadow-sm flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Email</h3>
                    <a href="mailto:sales@maxtreme.in" className="block text-brand-yellow-hover hover:underline mb-1">sales@maxtreme.in</a>
                    <a href="mailto:info@maxtreme.in" className="block text-brand-yellow-hover hover:underline">info@maxtreme.in</a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form Placeholder */}
            <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-xl shadow-gray-200/50 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">First Name</label>
                    <input type="text" id="firstName" className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-brand-yellow focus:border-brand-yellow block p-3 outline-none transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">Last Name</label>
                    <input type="text" id="lastName" className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-brand-yellow focus:border-brand-yellow block p-3 outline-none transition-colors" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                  <input type="email" id="email" className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-brand-yellow focus:border-brand-yellow block p-3 outline-none transition-colors" placeholder="john@company.com" />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                  <input type="tel" id="phone" className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-brand-yellow focus:border-brand-yellow block p-3 outline-none transition-colors" placeholder="+91 90000 00000" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Your Message</label>
                  <textarea id="message" rows="4" className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-lg focus:ring-brand-yellow focus:border-brand-yellow block p-3 outline-none transition-colors resize-none" placeholder="How can we help you?"></textarea>
                </div>

                <button type="button" className="w-full bg-brand-dark hover:bg-gray-800 text-white font-bold rounded-lg text-sm px-5 py-4 text-center transition-colors shadow-lg">
                  Submit Inquiry
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>
      
      {/* Map Placeholder */}
      <section className="bg-gray-200 h-96 relative w-full overflow-hidden border-t border-gray-300 flex items-center justify-center">
         {/* A real Google Maps iframe would go here */}
         <div className="absolute inset-0 bg-gray-300 flex items-center justify-center">
            <span className="text-gray-500 font-semibold tracking-widest uppercase">Interactive Map Placeholder</span>
         </div>
      </section>
    </div>
  );
};

export default ContactPage;
