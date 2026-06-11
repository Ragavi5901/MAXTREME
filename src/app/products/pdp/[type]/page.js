import React from 'react';
import ProductTemplate from '../../../../components/ProductTemplate';

export async function generateMetadata({ params }) {
  const { type } = await params;
  const formattedType = type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return {
    title: `${formattedType} | MAXTREME Engineering`,
    description: `High performance ${formattedType} for industrial fluid handling applications.`,
  };
}

const PdpPage = async ({ params }) => {
  const { type } = await params;
  const formattedType = type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  // Customization based on the type of pump
  let description = "Our Positive Displacement Pumps are engineered for precise and consistent fluid delivery, ideal for handling viscous, abrasive, and shear-sensitive liquids with complete reliability.";
  
  if (type.includes('screw')) {
    description = `The ${formattedType} is designed to provide smooth, pulsation-free fluid transfer. It excels in high-pressure and high-viscosity applications while ensuring minimal wear and tear.`;
  } else if (type.includes('gear')) {
    description = `Our ${formattedType} delivers exceptional volumetric efficiency. Its robust gear mechanism is perfect for transferring oils, resins, and other industrial chemicals with precision.`;
  }

  return (
    <ProductTemplate 
      title={formattedType} 
      category="Positive Displacement Pumps" 
      description={description}
      features={[
        'Constant Flow Regardless of Pressure',
        'Excellent Suction Lift Capability',
        'Handles High Viscosity Fluids',
        'Low Shear Fluid Transfer',
        'Reversible Operation Support',
        'Heavy Duty Industrial Bearings'
      ]}
      specs={[
        { label: 'Pump Type', value: formattedType },
        { label: 'Max Pressure', value: 'Up to 100 Bar' },
        { label: 'Viscosity Range', value: '1 to 1,000,000 cP' },
        { label: 'MOC (Material)', value: 'Cast Iron, Carbon Steel, SS316L, Alloy 20' },
      ]}
    />
  );
};

export default PdpPage;
