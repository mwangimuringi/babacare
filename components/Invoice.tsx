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
        <div className="max-w-2xl mx-auto bg-white p-6 shadow-lg rounded-lg">
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
  <table className="min-w-full border border-gray-300 mt-4">
  <thead>
    <tr className="bg-gray-100">
      <th className="px-4 py-2 border">Description</th>
      <th className="px-4 py-2 border">Quantity</th>
      <th className="px-4 py-2 border">Price</th>
      <th className="px-4 py-2 border">Total</th>
    </tr>
  </thead>
  <tbody>
    {/* rows same as before */}
  </tbody>
</table>

</table>

        </div>
        </div>
      );      
  };  
  
  export default Invoice;
  