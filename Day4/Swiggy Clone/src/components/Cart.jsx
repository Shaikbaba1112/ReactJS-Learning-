// import { useState } from "react";

// const sampleItems = [
//   { id: 1, name: "Paneer Butter Masala", price: 250, qty: 1 },
//   { id: 2, name: "Garlic Naan (2)", price: 60, qty: 2 },
//   { id: 3, name: "Gulab Jamun (3pcs)", price: 80, qty: 1 },
// ];

// const Cart = () => {
//   const [items, setItems] = useState(sampleItems);

//   function updateQty(id, delta){
//     setItems(prev => prev.map(it => it.id === id ? { ...it, qty: Math.max(0, it.qty + delta) } : it).filter(i => i.qty>0));
//   }

//   function removeItem(id){
//     setItems(prev => prev.filter(i => i.id !== id));
//   }

//   const subtotal = items.reduce((s, it) => s + it.price * it.qty, 0);
//   const delivery = items.length ? 30 : 0;
//   const total = subtotal + delivery;

//   return (
//     <div className="cart-page">
//       <div className="cart-container">
//         <h2>Your Cart</h2>

//         {items.length === 0 ? (
//           <div className="empty">Your cart is empty. Add something tasty!</div>
//         ) : (
//           <div className="cart-list">
//             <ul>
//               {items.map(item => (
//                 <li key={item.id} className="cart-item">
//                   <div className="ci-left">
//                     <div className="food-name">{item.name}</div>
//                     <div className="food-price">₹{item.price}</div>
//                   </div>
//                   <div className="ci-right">
//                     <div className="qty-controls">
//                       <button onClick={() => updateQty(item.id, -1)}>-</button>
//                       <span>{item.qty}</span>
//                       <button onClick={() => updateQty(item.id, 1)}>+</button>
//                     </div>
//                     <button className="remove" onClick={() => removeItem(item.id)}>Remove</button>
//                   </div>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         )}

//         <div className="cart-summary">
//           <div className="summary-row"><span>Subtotal</span><span>₹{subtotal}</span></div>
//           <div className="summary-row"><span>Delivery</span><span>₹{delivery}</span></div>
//           <div className="summary-row total"><strong>Total</strong><strong>₹{total}</strong></div>
//           <button className="checkout" disabled={items.length===0} onClick={() => alert('Checkout - demo only')}>Proceed to Checkout</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export { Cart };

export function Cart() {
    
  return (
  <div className="cart-container">
    <h1>Your Cart</h1>

    <div className="cart-item">
      <span className="item-name">Veg Burger</span>
      <span className="item-price">₹120</span>
    </div>

    <div className="cart-item">
      <span className="item-name">French Fries</span>
      <span className="item-price">₹80</span>
    </div>

    <div className="cart-item">
      <span className="item-name">Cold Drink</span>
      <span className="item-price">₹50</span>
    </div>

    <div className="total">
      <span>Total</span>
      <span>₹250</span>
    </div>

    <button className="checkout-btn">Checkout</button>
  </div>
  );
}
export default Cart;
