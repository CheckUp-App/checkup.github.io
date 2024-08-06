import React, { useState } from 'react';
import './Invoice.css'; // Optional: For styling


const Invoice = () => {
 const [items, setItems] = useState([
   { id: 1, name: 'Initial Psychiatric Evaluation', description: '60 min - Comprehensive evaluation and treatment plan', price: 350 },
 ]);
 const [taxRate] = useState(5); // Tax rate is now fixed


 const addItem = () => {
   setItems([...items, { id: items.length + 1, name: '', description: '', price: 0 }]);
 };


 const handleChange = (id, field, value) => {
   setItems(items.map(item => item.id === id ? { ...item, [field]: value } : item));
 };


 const handleRemove = id => {
   setItems(items.filter(item => item.id !== id));
 };


 const calculateTotal = () => {
   const subtotal = items.reduce((total, item) => total + item.price, 0);
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
     <h2 className="invoice-header">Itemized Sales Receipt</h2>
     <div className="company-info">
       <p>Holistic Behavioral Health<br />123 Sawdust Rd<br />The Woodlands, TX, 77089 <br />123-456-7890</p>
     </div>
     <div className="invoice-info">
       <p>Customer: Robert Downey Jr</p>
       <p>Invoice #: 1</p>
       <p>Date: 8/6/2024</p>
     </div>
     <table>
       <thead>
         <tr>
           <th>#</th>
           <th className="item-column">Item</th>
           <th>Description</th>
           <th className="price-column">Price</th>
           <th>Total</th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>
         {items.map(item => (
           <tr key={item.id}>
             <td>{item.id}</td>
             <td className="item-column"><input type="text" value={item.name} onChange={(e) => handleChange(item.id, 'name', e.target.value)} /></td>
             <td><input type="text" value={item.description} onChange={(e) => handleChange(item.id, 'description', e.target.value)} /></td>
             <td className="price-column"><input type="number" value={item.price} onChange={(e) => handleChange(item.id, 'price', e.target.value)} /></td>
             <td>${item.price.toFixed(2)}</td>
             <td><button onClick={() => handleRemove(item.id)}>Remove</button></td>
           </tr>
         ))}
       </tbody>
     </table>
     <div className="button-container">
       <button className="add-item-button" onClick={addItem}>Add Item</button>
     </div>
     <div className="totals">
       <div>Subtotal: ${totals.subtotal.toFixed(2)}</div>
       <div>Tax ({taxRate}%): ${totals.tax.toFixed(2)}</div>
       <div>Total Due: ${totals.total.toFixed(2)}</div>
     </div>
     <button>Pay Now</button>
   </div>
 );
};


export default Invoice;


