import { useRouter } from 'next/router';

const ConfirmationScreen: React.FC<Props> = ({ amount, cardEnding, date }) => {
  const router = useRouter();

  return (
    <>
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
