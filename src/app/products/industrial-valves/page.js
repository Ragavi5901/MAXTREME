import React from 'react';
import ProductTemplate from '../../../components/ProductTemplate';

export const metadata = {
  title: 'Industrial Valves | MAXTREME Engineering',
  description: 'Precision Industrial Valves for robust flow control.',
};

const IndustrialValvesPage = () => {
  return (
    <ProductTemplate 
      title="Industrial Valves" 
      category="Flow Control" 
      description="MAXTREME Engineering supplies a comprehensive range of industrial valves designed for precise and reliable flow control. Our valves ensure bubble-tight shut-off, throttling accuracy, and exceptional durability in the harshest pipeline conditions."
      features={[
        'Bubble-tight Shut-off',
        'Low Operating Torque',
        'Blow-out Proof Stem Design',
        'Fire Safe Certified Options',
        'Anti-static Devices Available',
        'Automated Actuator Compatible'
      ]}
      specs={[
        { label: 'Valve Types', value: 'Ball, Gate, Globe, Check, Butterfly' },
        { label: 'Pressure Class', value: '150# to 2500#' },
        { label: 'Size Range', value: '1/2" to 48"' },
        { label: 'Materials', value: 'Carbon Steel, SS316, Alloy Steel' },
      ]}
    />
  );
};

export default IndustrialValvesPage;
