import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  checked: state.checked,
  theme: state.theme,
});

const mapDispatchToProps = (dispatch) => {
  return {
    changeTheme: (theme) => {
      dispatch({
        type: "CHANGE_THEME",
        payload: theme,
      });
    },
  };
};

export const WrapperContainer = (Component) => {
  return connect(mapStateToProps, mapDispatchToProps)(Component);
};
