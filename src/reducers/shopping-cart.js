const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
			orderTotal: 0,
			orderCount: 0
    };
  }

  switch (action.type) {
    case "BOOK_ADDED_TO_CART":
      return updateOrder(state, action.payload, 1);

    case "BOOK_REMOVE_FROM_CART":
      return updateOrder(state, action.payload, -1);

    case "ALL_BOOKS_REMOVE_FROM_CART":
      const item = state.shoppingCart.cartItems.find(
        ({ id }) => id === action.payload
      );
      return updateOrder(state, action.payload, -item.count);
    default:
      return state.shoppingCart;
  }
};

const updateOrder = (state, bookId, qty) => {
  const {
    bookList: { books },
    shoppingCart: { cartItems }
  } = state;
  const book = books.find(({ id }) => id === bookId);
  const idx = cartItems.findIndex(({ id }) => id === bookId);
  const item = cartItems[idx];

  const newItem = updateCartItem(item, book, qty);
  const newCartItems = updateCartItems(cartItems, newItem, idx);
  let orderTotalCounter = 0;
  let ordeCountCounter = 0;
  newCartItems.forEach(item => (orderTotalCounter += item.total));
  newCartItems.forEach(item => (ordeCountCounter += item.count));
  return {
    orderCount: ordeCountCounter,
    orderTotal: orderTotalCounter,
    cartItems: newCartItems
  };
};

const updateCartItem = (item = {}, book, qty) => {
  const { id = book.id, title = book.title, count = 0, total = 0 } = item;

  return {
    id,
    title,
    count: count + qty,
    total: total + qty * book.price
  };
};

const updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }

  if (idx === -1) {
    return [...cartItems, item];
  }
  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

export default updateShoppingCart;
