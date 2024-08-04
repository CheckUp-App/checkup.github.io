import React, { useState } from 'react';
import './Invoice.css'; // Optional: For styling

const Invoice = () => {
  const [items, setItems] = useState([
    { id: 1, name: 'Widgets', description: 'Finest Grade', qty: 2, price: 10 },
    { id: 2, name: 'Hammock', description: 'Extremely Comfy', qty: 1, price: 22 }
  ]);
  const [taxRate, setTaxRate] = useState(15);

  const addItem = () => {
    setItems([...items, { id: items.length + 1, name: '', description: '', qty: 0, price: 0 }]);
  };

  const handleChange = (id, field, value) => {
    setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const handleRemove = id => {
    setItems(items.filter(item => item.id !== id));
  };

  const calculateTotal = () => {
    const subtotal = items.reduce((total, item) => total + (item.qty * item.price), 0);
    const tax = (subtotal * taxRate) / 100;
    return {
      subtotal,
      tax,
      total: subtotal + tax
    };
  };

  const totals = calculateTotal();

  return (
    <div className="invoice">
      <div className="company-info">
        <p>Amazing Company<br />123 Kensington Ave<br />Toronto, ON, Canada A1B2C3<br />416-555-1234</p>
      </div>
      <div className="invoice-info">
        <p>Customer #: 123456</p>
        <p>Invoice #: 123456</p>
        <p>Date: 2019-01-01</p>
      </div>
      <h2>Invoice</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Description</th>
            <th>Qty</th>
            <th>Price</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td><input type="text" value={item.name} onChange={(e) => handleChange(item.id, 'name', e.target.value)} /></td>
              <td><input type="text" value={item.description} onChange={(e) => handleChange(item.id, 'description', e.target.value)} /></td>
              <td><input type="number" value={item.qty} onChange={(e) => handleChange(item.id, 'qty', e.target.value)} /></td>
              <td><input type="number" value={item.price} onChange={(e) => handleChange(item.id, 'price', e.target.value)} /></td>
              <td>${(item.qty * item.price).toFixed(2)}</td>
              <td><button onClick={() => handleRemove(item.id)}>Remove</button></td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={addItem}>Add Item</button>
      <div className="totals">
        <div>Tax Rate (%): <input type="number" value={taxRate} onChange={(e) => setTaxRate(e.target.value)} /></div>
        <div>Subtotal: ${totals.subtotal.toFixed(2)}</div>
        <div>Tax: ${totals.tax.toFixed(2)}</div>
        <div>Total Due: ${totals.total.toFixed(2)}</div>
      </div>
      <button>Pay Now</button>
    </div>
  );
};

export default Invoice;

