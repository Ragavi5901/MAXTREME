import React from 'react';
import ProductTemplate from '../../../components/ProductTemplate';

export const metadata = {
  title: 'Centrifugal Pumps | MAXTREME Engineering',
  description: 'High-volume Centrifugal Pumps for industrial fluid transfer applications.',
};

const CentrifugalPumpsPage = () => {
  return (
    <ProductTemplate 
      title="Centrifugal Pumps" 
      category="Fluid Handling" 
      description="Our Centrifugal Pumps are engineered for high-efficiency, continuous fluid transfer. Utilizing hydrodynamic energy, these pumps offer exceptional reliability for handling low viscosity liquids, water, chemicals, and industrial solvents."
      features={[
        'High Flow Rates',
        'Continuous Operation Capability',
        'Energy Efficient Impeller Design',
        'Low Pulsation Output',
        'Easy Maintenance Back-Pull-Out Design',
        'Wide Range of Material Options'
      ]}
      specs={[
        { label: 'Max Flow Rate', value: 'Up to 5000 m³/hr' },
        { label: 'Max Head', value: 'Up to 200 m' },
        { label: 'Operating Temperature', value: '-20°C to +350°C' },
        { label: 'Materials', value: 'Cast Iron, Bronze, SS304, SS316, Duplex' },
      ]}
    />
  );
};

export default CentrifugalPumpsPage;
