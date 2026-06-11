import React from 'react';
import PageHeader from '../../components/PageHeader';

export const metadata = {
  title: 'Projects | MAXTREME Engineering',
  description: 'Explore our portfolio of engineering projects, turnkey installations, and industrial solutions.',
};

const ProjectsPage = () => {
  // Placeholder data for projects
  const projects = [
    { id: 1, title: 'Large Scale Pumping Station', category: 'Fluid Handling', image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2070&auto=format&fit=crop' },
    { id: 2, title: 'Industrial Pipeline Network', category: 'Turnkey Installation', image: 'https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=2069&auto=format&fit=crop' },
    { id: 3, title: 'Chemical Dosing System', category: 'Dosing Pumps', image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=1974&auto=format&fit=crop' },
    { id: 4, title: 'Power Transmission Assembly', category: 'Power Transmission', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop' },
    { id: 5, title: 'Valve Automation Setup', category: 'Industrial Valves', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop' },
    { id: 6, title: 'Heavy Duty Screw Pumps', category: 'Positive Displacement', image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <PageHeader 
        title="Our Projects" 
        subtitle="Discover how we've helped industries optimize their operations with state-of-the-art engineering and turnkey solutions."
      />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors z-10 duration-500"></div>
                  {/* We use standard img here for the Unsplash placeholders, but Next/Image should be used for local assets */}
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-brand-yellow text-brand-dark text-xs font-bold uppercase tracking-wider rounded-full shadow-lg">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-yellow-hover transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 text-sm mb-4">
                    A comprehensive solution designed to handle demanding industrial requirements with maximum efficiency and minimal downtime.
                  </p>
                  <div className="flex items-center text-brand-yellow-hover font-semibold text-sm">
                    View Case Study 
                    <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-brand-dark text-white py-16 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Have a similar project in mind?</h2>
          <p className="text-gray-400 mb-8">Contact our engineering team to discuss how we can bring your next industrial project to life.</p>
          <a href="/contact" className="inline-block bg-brand-yellow text-brand-dark px-8 py-3 rounded-full font-bold hover:bg-yellow-400 transition-colors shadow-lg">
            Discuss Your Project
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
