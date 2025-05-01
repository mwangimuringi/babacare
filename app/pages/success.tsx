import Head from "next/head";

import ConfirmationScreen from "@/components/ConfirmationScreen";

import { useRouter } from 'next/router';

const SuccessPage = () => {
    const router = useRouter();
  const { amount, cardEnding, date } = router.query;
  const hasError = false;

  if (hasError) {
    return <div>Error: Missing payment data.</div>;
  }
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <Head>
        <title>Payment Success - Babacare</title>
      </Head>
      <ConfirmationScreen
        amount={120}
        cardEnding="1234"
        date={new Date().toLocaleDateString()}
      />
    </div>
  );
};

export default SuccessPage;
