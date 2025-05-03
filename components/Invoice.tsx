type InvoiceItem = {
    description: string;
    quantity: number;
    price: number;
  };
  
  type InvoiceProps = {
    invoiceNumber: string;
    customerName: string;
    date: string;
    items: InvoiceItem[];
  };  

  const total = items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );
  
  // At the end:
  <p>Total: ${total.toFixed(2)}</p>  

  const Invoice: React.FC<InvoiceProps> = ({
    invoiceNumber,
    customerName,
    date,
    items,
  }) => {
    return (
        <div>
          <h1>Babacare</h1>
          <p>Invoice #: {invoiceNumber}</p>
          <p>Customer: {customerName}</p>
          <p>Date: {date}</p>

          <table>
  <thead>
    <tr>
      <th>Description</th>
      <th>Quantity</th>
      <th>Price</th>
      <th>Total</th>
    </tr>
  </thead>
  <tbody>
    {items.map((item, index) => (
      <tr key={index}>
        <td>{item.description}</td>
        <td>{item.quantity}</td>
        <td>${item.price.toFixed(2)}</td>
        <td>${(item.quantity * item.price).toFixed(2)}</td>
      </tr>
    ))}
  </tbody>
</table>

        </div>

      );      
  };  
  
  export default Invoice;
  