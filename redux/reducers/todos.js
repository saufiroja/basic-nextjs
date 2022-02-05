export const initialState = {
  data: [
    { id: 1, text: 'Learn about React' },
    { id: 2, text: 'Meet friend for lunch' },
  ],
};

export const todosReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    default:
      return state;
  }
};
