import React from 'react';
import { useRouter } from 'next/router';

type Props = {
  amount: number;
  cardEnding: string;
  date: string;
};

const SummaryRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex justify-between py-1">
    <span className="font-medium">{label}</span>
    <span>{value}</span>
  </div>
);

const ConfirmationScreen: React.FC<Props> = ({ amount, cardEnding, date }) => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6 p-4">
      <h1 className="text-6xl animate-bounce text-green-700" aria-label="Payment Successful">✅</h1>
      <h2 className="text-3xl font-bold">Thank You!</h2>
      <p className="text-lg text-gray-600">Your payment was successful.</p>
      <p className="text-sm text-gray-500">We’ve emailed you the receipt.</p>

      <div className="mt-4 w-full max-w-sm bg-gray-100 p-4 rounded shadow">
        <h3 className="text-xl font-semibold mb-2">Summary</h3>
        <SummaryRow label="Amount Paid" value={`$${amount}`} />
        <SummaryRow label="Payment Method" value={`**** ${cardEnding}`} />
        <SummaryRow label="Date" value={date} />
      </div>

      <button
        onClick={() => router.push('/')}
        className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Back to Home
      </button>
    </div>
  );
};

export default ConfirmationScreen;
