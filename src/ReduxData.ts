interface actionType {
  type: string;
}

const reducer = (state = 100, action: actionType) => {
  console.log(action);

  if (action.type === "add") {
    state++;
    return state;
  } else if (action.type === "delete") {
    state--;
    return state;
  } else {
    return state;
  }
};

export default reducer;
