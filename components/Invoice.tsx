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
  Invoice.defaultProps = {
    items: [],
  };
  
  const total = items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
  
  // Use in table:
  <td>{formatCurrency(item.price)}</td>
  <td>{formatCurrency(item.quantity * item.price)}</td>  
  
  // At the end:
  <p>Total: ${total.toFixed(2)}</p>  

  const Invoice: React.FC<InvoiceProps> = ({
    invoiceNumber,
    customerName,
    date,
    items,
  }) => {
    return (
        <div className="grid grid-cols-2 gap-4 mb-4">
  <div>
    <p className="font-bold">Invoice #:</p>
    <p>{invoiceNumber}</p>
  </div>
  <div>
    <p className="font-bold">Date:</p>
    <p>{date}</p>
  </div>
  <div>
    <p className="font-bold">Customer:</p>
    <p>{customerName}</p>
  </div>
</div>

      );      
  };  
  
  export default Invoice;
  