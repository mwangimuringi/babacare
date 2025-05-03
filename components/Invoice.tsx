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

const Invoice = () => {
    return <div>Invoice Component</div>;
  };
  
  export default Invoice;
  