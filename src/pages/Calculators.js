import React from 'react';
import CompoundCalculator from '../components/CompoundCalculator';
import BasicCalculator from '../components/BasicCalculator';
import CalculateProfitLoss from '../components/ProfitLossCalculator';
import ForexMarginCalculator from '../components/ForexMarginCalculator';



function Calculators() {
  return (
    <div className="grid justify-center gap-6 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
      
      <div className='mt-5 mb-5 mx-5'>  
        <BasicCalculator/>
      </div>
      <div className='mt-5 mb-5 mx-5'>
        <CalculateProfitLoss />
      </div>  
      <div className='mb-5 mx-5'>
        <CompoundCalculator />
      </div> 
      <div className='mb-5 mx-5'>
        <ForexMarginCalculator />
      </div>

    </div>
  );
}

export default Calculators;
