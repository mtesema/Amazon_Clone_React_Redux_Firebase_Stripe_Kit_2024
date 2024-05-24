export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price * item.quantity + amount, 0);

const reducer = (state, action) => {
  console.log("action>>>", action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      const index = state.basket.findIndex(
        (item) => item.id === action.item.id
      );
      if (index >= 0) {
        return {
          ...state,
          basket: state.basket.map((item, i) =>
            i === index ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, quantity: 1 }],
        };
      }

    case "REMOVE_ONE_FROM_BASKET":
      const itemIndex = state.basket.findIndex((item) => item.id === action.id);
      if (itemIndex >= 0) {
        const item = state.basket[itemIndex];
        if (item.quantity > 1) {
          return {
            ...state,
            basket: state.basket.map((basketItem, i) =>
              i === itemIndex
                ? { ...basketItem, quantity: basketItem.quantity - 1 }
                : basketItem
            ),
          };
        } else {
          return {
            ...state,
            basket: state.basket.filter((_, i) => i !== itemIndex),
          };
        }
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as it's not in the basket!`
        );
      }
      return state;

    case "REMOVE_FROM_BASKET":
      const newBasket = state.basket.filter((item) => item.id !== action.id);
      return {
        ...state,
        basket: newBasket,
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export default reducer;
