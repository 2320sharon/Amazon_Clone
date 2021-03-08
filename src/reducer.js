export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) => {
  return basket?.reduce((amount, item) => item.price + amount, 0);
};

// Selector
//export const getBasketTotal = (basket) =>
//  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      //this will find the first index of the first item's id in the basket that matches the action.id
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      //make a temporary copy of the new state of the basket
      let newBasket = [...state.basket];
      if (index >= 0) {
        //means we found an index in the basket
        newBasket.splice(index, 1);
      } else {
        //did not find the item in the basket
        console.warn(
          `Cannot remove product (id: ${action.id}) as it is not in the basket`
        );
      }
      return {
        ...state,
        basket: newBasket,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };

    default:
      return state;
  }
};

export default reducer;
