type ReceiptProps = {
  customerName: string;
  amountPaid: number;
  date: string;
  receiptNumber: string;
};

export default function Receipt({
  customerName,
  amountPaid,
  date,
  receiptNumber,
}: ReceiptProps) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "1rem",
        borderRadius: "8px",
        maxWidth: "400px",
      }}
    >
      <h2>Payment Receipt</h2>
      <hr />
      <p>Receipt #: {receiptNumber}</p>
      <p>Date: {date}</p>
      <p>Customer: {customerName}</p>
      <p>Amount Paid: ${amountPaid.toFixed(2)}</p>
    </div>
  );
}
