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
        </div>
      );      
  };  
  
  export default Invoice;
  