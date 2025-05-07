type ReceiptProps = {
    customerName: string;
    amountPaid: number;
    date: string;
    receiptNumber: string;
  };
  
  export default function Receipt({ customerName, amountPaid, date, receiptNumber }: ReceiptProps) {
    return (
      <div>
        <h1>Receipt</h1>
        <p>Receipt #: {receiptNumber}</p>
        <p>Date: {date}</p>
        <p>Customer: {customerName}</p>
        <p>Amount Paid: ${amountPaid.toFixed(2)}</p>
      </div>
    );
  }
  