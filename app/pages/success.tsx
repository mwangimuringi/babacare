import ConfirmationScreen from '@/components/ConfirmationScreen';

const SuccessPage = () => {
    return (
        <ConfirmationScreen
          amount={120}
          cardEnding="1234"
          date={new Date().toLocaleDateString()}
        />
      );      
};

export default SuccessPage;
