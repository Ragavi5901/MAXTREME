import React from 'react';
import ProductTemplate from '../../../components/ProductTemplate';

export const metadata = {
  title: 'AODD Pumps | MAXTREME Engineering',
  description: 'Air Operated Double Diaphragm (AODD) Pumps for safe and efficient fluid transfer.',
};

const AoddPumpsPage = () => {
  return (
    <ProductTemplate 
      title="Air Operated Double Diaphragm (AODD) Pumps" 
      category="Fluid Handling" 
      description="Our AODD pumps offer a versatile, highly reliable, and intrinsically safe solution for transferring a wide variety of fluids, from clean, light viscosity fluids to highly viscous, abrasive, and shear-sensitive materials."
      features={[
        'Run-dry Capability without Damage',
        'Self-Priming Design',
        'Variable Flow and Pressure Rates',
        'Stall-Free Air Valves',
        'Handles Solids and Abrasives',
        'No Electrical Motors Required'
      ]}
      specs={[
        { label: 'Max Flow Rate', value: 'Up to 1000 LPM' },
        { label: 'Max Pressure', value: 'Up to 8.6 Bar (125 PSI)' },
        { label: 'Body Materials', value: 'Aluminium, SS316, Polypropylene, PVDF' },
        { label: 'Elastomers', value: 'PTFE, Santoprene, Buna-N, Viton' },
      ]}
    />
  );
};

export default AoddPumpsPage;
