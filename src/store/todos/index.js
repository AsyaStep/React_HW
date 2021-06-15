const initState = {
  point: [],
};

const actionType = {
  ADD_TASK: "ADD_TASK",
};

export const actionCreateTodo = (payload) => {
  return {
    type: actionType.ADD_TASK,
    payload,
  };
};

const taskReducer = (state = initState, action) => {
  
  switch (action.type) {
    case actionType.ADD_TASK:
      return { ...state, point: [...state.point, action.payload] };
    default:
      return state;
  }
};

export default taskReducer;
