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
      <p>
        Subtotal: ${items.reduce((sum, item) => sum + item.price, 0).toFixed(2)}
      </p>
      <p>
        Tax: $
        {(
          amountPaid - items.reduce((sum, item) => sum + item.price, 0)
        ).toFixed(2)}
      </p>
      <p>
        <strong>Total: ${amountPaid.toFixed(2)}</strong>
      </p>

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
