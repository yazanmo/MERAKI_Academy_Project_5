// create the initial state for the reducer
const initialState = {
  review: [],
};

const review = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_TODOS":
      return { review: [...payload] };

    case "CREATE_TODO":
      console.log("aaaaaaaaaaaaaaaaa", [...state.review, payload], ...payload);
      return { review: [...state.review, ...payload] };

    case "UPDATE_TODO":
      return {
        review: state.review.map((review) => {
          if (review._id === payload._id) {
            return payload;
          } else {
            return review;
          }
        }),
      };

    case "DELETE_TODO":
      return {
        review: state.reviews.filter((review) => review._id !== payload._id),
      };

    default:
      return state;
  }
};

export default review;
export const setTodos = (review) => {
  return {
    type: "SET_TODOS",
    payload: review,
  };
};
export const createTodo = (review) => {
  return {
    type: "CREATE_TODO",
    payload: review,
  };
};
export const updateTodo = (review) => {
  return {
    type: "UPDATE_TODO",
    payload: review,
  };
};
export const deleteTodo = (review) => {
  return {
    type: "DELETE_TODO",
    payload: review,
  };
};
