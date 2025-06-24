// components/Receipt.tsx

import React from "react";

export type Item = {
  description: string;
  price: number;
};

export type ReceiptProps = {
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
  items,
}: ReceiptProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const tax = amountPaid - subtotal;

  return (
    <div className="border p-4 rounded-lg max-w-md bg-white shadow-md">
      <h2 className="text-xl font-semibold mb-2">Payment Receipt</h2>
      <hr className="mb-4" />

      <p>
        <strong>Receipt #:</strong> {receiptNumber}
      </p>
      <p>
        <strong>Date:</strong> {new Date(date).toLocaleDateString()}
      </p>
      <p>
        <strong>Customer:</strong> {customerName}
      </p>

      <hr className="my-4" />

      <p className="text-sm">Items</p>
      <hr className="my-2" />
      <p className="text-sm font-bold">Subtotal</p>

      <hr className="my-2" />
      <p className="text-sm font-bold">Tax</p>

      <hr className="my-2" />
      <p className="text-sm font-bold">Total</p>
      <hr className="my-4" />

      <p className="text-sm">Items</p>
      <hr className="my-2" />
      <p className="text-sm font-bold">Subtotal</p>

      {/* <hr className="my-2" />
          <p className="text-sm font-bold">Tax</p>
          
            */}
      <table className="w-full text-sm mt-4 border-t pt-2">
        <thead>
          <tr>
            <th className="text-left py-1">Description</th>
            <th className="text-right py-1">Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, idx) => (
            <tr key={idx}>
              <td className="py-1">{item.description}</td>
              <td className="text-right py-1">${item.price.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 text-sm">
        <p>
          <strong>Subtotal:</strong> ${subtotal.toFixed(2)}
        </p>
        <p>
          <strong>Tax:</strong> ${tax.toFixed(2)}
        </p>
        <p className="font-bold">
          <strong>Total:</strong> ${amountPaid.toFixed(2)}
        </p>
      </div>

      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
        Download PDF
      </button>

      <a href="mailto:"></a>
      <hr className="mt-4" />
      <p className="text-xs text-gray-500 mt-4">
        If you have any questions, please contact us at
        <a
          href="mailto:support@example.com"
          className="text-blue-600 hover:text-blue-800"
        >
          support@example.com
        </a>
      </p>

      <p className="text-xs text-gray-500 mt-4">Thank you for your purchase!</p>
    </div>
  );
}
