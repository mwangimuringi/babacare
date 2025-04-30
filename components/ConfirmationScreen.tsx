import { useRouter } from 'next/router';
import { Props } from 'next/script';

const SummaryRow = ({ label, value }: { label: string; value: string }) => (
    <div className="flex justify-between py-1">
      <span className="font-medium">{label}</span>
      <span>{value}</span>
    </div>
  );
  
  // inside summary:
  <SummaryRow label="Amount Paid" value={`$${amount}`} />
  <SummaryRow label="Payment Method" value={`**** ${cardEnding}`} />
  <SummaryRow label="Date" value={date} />
  
const ConfirmationScreen: React.FC<Props> = ({ amount, cardEnding, date }) => {
  const router = useRouter();

  return (
    <>

      {/* existing content */}
      <h1 className="text-6xl animate-bounce">✅</h1>
      <h1 className="text-2xl">Your payment was successful!</h1>
      <p className="text-xl">
        Your card ending in {cardEnding} will expire on {date}
      </p>
      <p className="text-xl">
        You have been charged {amount} for your monthly subscription.
      {/* existing content */}
      <h1 className="text-6xl animate-bounce">✅</h1>
      <button
        className="mt-6 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        onClick={() => router.push('/')}
      >
        Back to Home
      </button>
    </>
  );
};
