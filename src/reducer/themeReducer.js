const initialState = {
  theme: "light",
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      document.body.classList.contains("dark")
        ? document.body.classList.remove("dark")
        : document.body.classList.add("dark");
      return {
        ...state,
        checked: !state.checked,
        theme: action.payload,
      };
    default:
      document.body.classList.remove("dark");
      return {
        ...state,
      };
  }
};

export default themeReducer;
