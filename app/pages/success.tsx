import Head from 'next/head';
import ConfirmationScreen from '@/components/ConfirmationScreen';

const SuccessPage = () => {
    return (
        <>
  <Head>
    <title>Payment Success - Babacare</title>
  </Head>
  <ConfirmationScreen
          amount={120}
          cardEnding="1234"
          date={new Date().toLocaleDateString()}
        />
</>
        
      );      
};

export default SuccessPage;
