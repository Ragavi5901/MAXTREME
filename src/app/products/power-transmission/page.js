import React from 'react';
import ProductTemplate from '../../../components/ProductTemplate';

export const metadata = {
  title: 'Power Transmission | MAXTREME Engineering',
  description: 'High-performance power transmission solutions for industrial applications.',
};

const PowerTransmissionPage = () => {
  return (
    <ProductTemplate 
      title="Power Transmission Systems" 
      category="Power Transmission" 
      description="MAXTREME Engineering provides robust and highly efficient power transmission systems engineered to transfer mechanical energy seamlessly across industrial equipment. Our solutions minimize energy loss and handle high torque applications with absolute reliability."
      features={[
        'High Torque Capacity',
        'Vibration Dampening Technology',
        'Precision Engineering',
        'Low Maintenance Requirements',
        'Durable Alloy Construction',
        'Seamless Integration'
      ]}
    />
  );
};

export default PowerTransmissionPage;
