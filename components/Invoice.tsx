import React from 'react';

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
  const total = items.reduce(
    (sum, item) => sum + item.quantity * item.price,
    0
  );

  const formatCurrency = (value: number) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Babacare Invoice</h1>

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
          {items.map((item, index) => (
            <tr key={index}>
              <td className="px-4 py-2 border">{item.description}</td>
              <td className="px-4 py-2 border">{item.quantity}</td>
              <td className="px-4 py-2 border">
                {formatCurrency(item.price)}
              </td>
              <td className="px-4 py-2 border">
                {formatCurrency(item.quantity * item.price)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="text-right font-bold mt-4">
        Total: {formatCurrency(total)} USD
        Total: {formatCurrency(total)}
      </p>

      <div className="flex space-x-2 mt-4">
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Download PDF
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => window.print()}
        >
          Print Invoice
        </button>
      </div>
    </div>
  );
};

export default Invoice;
