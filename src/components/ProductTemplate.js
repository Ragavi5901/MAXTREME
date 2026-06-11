import React from 'react';
import PageHeader from './PageHeader';
import Image from 'next/image';

const ProductTemplate = ({ title, category, description, features, specs, imageUrl }) => {
  return (
    <div className="min-h-screen bg-white">
      <PageHeader 
        title={title} 
        subtitle={`Premium ${category} solutions engineered for maximum reliability and performance in demanding industrial environments.`}
      />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Product Image Section */}
            <div className="animate-fade-in-up">
              <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 flex items-center justify-center h-full min-h-[400px]">
                {/* Fallback to placeholder if no image URL is provided */}
                {imageUrl ? (
                  <img src={imageUrl} alt={title} className="max-w-full h-auto object-contain drop-shadow-2xl" />
                ) : (
                  <div className="text-center">
                    <svg className="w-32 h-32 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <p className="text-gray-400 font-medium">Product Image Placeholder</p>
                  </div>
                )}
              </div>
            </div>
            
            {/* Product Details Section */}
            <div className="space-y-10 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              
              <div>
                <span className="text-brand-yellow font-bold tracking-wider uppercase text-sm mb-2 block">{category}</span>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">{title}</h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {description || `The ${title} is a state-of-the-art solution designed by Maxtreme Engineering to deliver unparalleled performance. Built with industrial-grade materials, it ensures longevity and efficiency even under the most extreme operating conditions.`}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <svg className="w-6 h-6 text-brand-yellow mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Key Features
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(features || ['High Efficiency Output', 'Durable Construction', 'Low Maintenance Design', 'Corrosion Resistant', 'Energy Saving Operation', 'Compact Footprint']).map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <span className="w-2 h-2 rounded-full bg-brand-yellow mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Specifications Table Placeholder */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <svg className="w-6 h-6 text-brand-yellow mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                  Technical Specifications
                </h3>
                <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200">
                  <table className="w-full text-sm text-left">
                    <tbody>
                      {(specs || [
                        { label: 'Capacity Range', value: 'Up to 5000 m³/hr' },
                        { label: 'Pressure Rating', value: 'Up to 45 Bar' },
                        { label: 'Operating Temperature', value: '-20°C to +200°C' },
                        { label: 'Material', value: 'Cast Iron, SS316, Alloy 20' },
                      ]).map((spec, idx) => (
                        <tr key={idx} className="border-b border-gray-200 last:border-0">
                          <th className="px-6 py-4 font-semibold text-gray-900 bg-gray-100/50 w-1/3">{spec.label}</th>
                          <td className="px-6 py-4 text-gray-700">{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="/contact" className="bg-brand-dark hover:bg-gray-800 text-white font-bold rounded-lg px-8 py-4 text-center transition-colors shadow-lg">
                  Request a Quote
                </a>
                <a href="/contact" className="bg-white hover:bg-gray-50 text-brand-dark border border-gray-300 font-bold rounded-lg px-8 py-4 text-center transition-colors">
                  Download Brochure
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductTemplate;
