import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Inicializa el carrito con un arreglo vacío
  },
  reducers: {
    // 1. Reductor para agregar un artículo
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    // 2. Reductor para eliminar un artículo por su nombre
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload);
    },

    // 3. Reductor para actualizar la cantidad de un artículo
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Exportar creadores de acciones
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// Exportar el reductor por defecto para store.js
export default CartSlice.reducer;