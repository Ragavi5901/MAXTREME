import React from 'react';
import ProductTemplate from '../../../../components/ProductTemplate';

export async function generateMetadata({ params }) {
  const { type } = await params;
  const formattedType = type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return {
    title: `${formattedType} Dosing Pump | MAXTREME Engineering`,
    description: `Precision ${formattedType} Dosing Pumps for accurate chemical injection.`,
  };
}

const DosingPage = async ({ params }) => {
  const { type } = await params;
  const formattedType = type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  
  return (
    <ProductTemplate 
      title={`${formattedType} Dosing Pump`}
      category="Dosing Pumps" 
      description={`The ${formattedType} Dosing Pump is meticulously engineered for the highly accurate injection of chemicals and fluids. Perfect for water treatment, petrochemical, and manufacturing processes where precision is non-negotiable.`}
      features={[
        'Micro-Processor Based Control',
        'High Volumetric Accuracy (±1%)',
        'Adjustable Stroke Length and Frequency',
        'Leak-proof Diaphragm/Plunger Design',
        'Corrosion Resistant Liquid End',
        'Integrated Over-pressure Protection'
      ]}
      specs={[
        { label: 'Dosing Technology', value: `${formattedType} Type` },
        { label: 'Flow Accuracy', value: '± 1% of rated capacity' },
        { label: 'Max Output Pressure', value: 'Up to 400 Bar (depending on model)' },
        { label: 'Wetted Parts', value: 'SS316, PTFE, PVC, PVDF, Hastelloy-C' },
      ]}
    />
  );
};

export default DosingPage;
