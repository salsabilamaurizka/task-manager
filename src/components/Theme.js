import React from "react";
import { WrapperContainer } from "../container/themeContainer";

const Theme = ({ changeTheme, checked }) => {
  const themeName = checked ? "light" : "dark";
  return (
    <div className="l-header__theme">
      <input
        type="checkbox"
        id="switch"
        onChange={() => changeTheme(themeName)}
      />
      <label htmlFor="switch"></label>
    </div>
  );
};

export default WrapperContainer(Theme);
