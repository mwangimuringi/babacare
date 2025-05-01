import Head from "next/head";
import ConfirmationScreen from "@/components/ConfirmationScreen";

const SuccessPage = () => {
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
