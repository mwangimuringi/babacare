type Item = {
  description: string;
  price: number;
};

type ReceiptProps = {
  customerName: string;
  amountPaid: number;
  date: string;
  receiptNumber: string;
  items: Item[];
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
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.description}</td>
              <td>${item.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
