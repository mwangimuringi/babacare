import React from 'react';

type Props = {
    amount: number;
    cardEnding: string;
    date: string;
  };
  
const ConfirmationScreen = () => {
    return (
        <div className="mt-4 bg-gray-100 p-4 rounded">
        <h2 className="text-xl font-semibold">Summary</h2>
        <p>Amount Paid: $120</p>
        <p>Amount Paid: ${amount}</p>
<p>Payment Method: **** **** **** {cardEnding}</p>
<p>Date: {date}</p>

      </div>      
    );
  };  

export default ConfirmationScreen;
