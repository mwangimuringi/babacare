import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import ConfirmationScreen from "@/components/ConfirmationScreen";

const SuccessPage = () => {
  const router = useRouter();
  const { amount, cardEnding, date } = router.query as {
    amount?: string;
    cardEnding?: string;
    date?: string;
  };

  const safeAmount = Number(amount) || 0;
  const safeCardEnding = String(cardEnding || "0000");
  const safeDate = String(date || new Date().toLocaleDateString());

  const hasError = !amount || !cardEnding || !date;

  if (!router.isReady) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return (
      <div className="flex flex-col min-h-screen justify-center items-center text-red-600">
        <h1 className="text-2xl font-bold">Error</h1>
        <p>Missing payment information.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <Head>
        <title>Payment Success - Babacare</title>
        <meta
          name="description"
          content="Your payment was successful. View your confirmation here."
        />
      </Head>
      <ConfirmationScreen
        amount={safeAmount}
        cardEnding={safeCardEnding}
        date={safeDate}
        className="animate-fadeIn"
      />
    </div>
  );
};

export default SuccessPage;
