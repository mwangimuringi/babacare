import { useRouter } from "next/router";
import Head from "next/head";

import ConfirmationScreen from "@/components/ConfirmationScreen";

const hasError = !amount || !cardEnding || !date;

const SuccessPage = () => {
  const router = useRouter();
  const { amount, cardEnding, date } = router.query;
  const hasError = false;

  if (!router.isReady) {
    return <div>Loading...</div>;
  }
  
  if (hasError) {
    return <div>Error: Missing payment data.</div>;
  }
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <Head>
        <title>Payment Success - Babacare</title>
      </Head>
      <ConfirmationScreen
  amount={Number(amount) || 0}
  cardEnding={String(cardEnding || '0000')}
  date={String(date || new Date().toLocaleDateString())}
/>

    </div>
  );
};

export default SuccessPage;
