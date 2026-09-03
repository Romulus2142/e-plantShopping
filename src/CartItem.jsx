import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';

const CartItem = ({ onContinueShopping }) => {
  const cart = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  // 1. Calcular el monto total de todos los artículos en el carrito
  const calculateTotalAmount = () => {
    let total = 0;
    cart.forEach(item => {
      // Convierte el costo "$15" a número (removiendo el signo '$' si existe)
      const costNumber = parseFloat(item.cost.toString().replace('$', ''));
      total += costNumber * item.quantity;
    });
    return total;
  };

  // 2. Manejador para continuar comprando (regresa a la lista de plantas)
  const handleContinueShopping = (e) => {
    if (e) e.preventDefault();
    onContinueShopping(e);
  };

  // 3. Manejador para el botón de Checkout
  const handleCheckoutShopping = (e) => {
    alert('Functionality to be added for future reference');
  };

  // 4. Incrementar la cantidad de un producto
  const handleIncrement = (item) => {
    dispatch(updateQuantity({
      name: item.name,
      quantity: item.quantity + 1
    }));
  };

  // 5. Decrementar la cantidad de un producto (o eliminar si llega a 0)
  const handleDecrement = (item) => {
    if (item.quantity > 1) {
      dispatch(updateQuantity({
        name: item.name,
        quantity: item.quantity - 1
      }));
    } else {
      dispatch(removeItem(item.name));
    }
  };

  // 6. Eliminar completamente una planta del carrito
  const handleRemove = (item) => {
    dispatch(removeItem(item.name));
  };

  // 7. Calcular el subtotal por cada tipo de planta (Costo * Cantidad)
  const calculateTotalCost = (item) => {
    const costNumber = parseFloat(item.cost.toString().replace('$', ''));
    return costNumber * item.quantity;
  };

  return (
    <div className="cart-container">
      <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
      <div>
        {cart.map(item => (
          <div className="cart-item" key={item.name}>
            <img className="cart-item-image" src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-cost">${item.cost}</div>
              <div className="cart-item-quantity">
                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                <span className="cart-item-quantity-value">{item.quantity}</span>
                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
              </div>
              <div className="cart-item-total">Subtotal: ${calculateTotalCost(item)}</div>
              <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }} className="continue_shopping_btn">
        <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
        <br />
        <button className="get-started-button1" onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
      </div>
    </div>
  );
};

export default CartItem;