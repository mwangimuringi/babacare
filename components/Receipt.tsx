type ReceiptProps = {
    customerName: string;
    amountPaid: number;
  };
  
  export default function Receipt({ customerName, amountPaid }: ReceiptProps) {
    return (
      <div>
        <h1>Receipt</h1>
        <p>Customer: {customerName}</p>
        <p>Amount Paid: ${amountPaid.toFixed(2)}</p>
      </div>
    );
  }
  