import React from "react";

function IconSwitch({ icon, onSwitch }) {
  const iconSwitchStyle = {
    cursor: "pointer",
  };

  return (
    <div className="icon-switch" style={iconSwitchStyle} onClick={onSwitch}>
      <i className="material-icons">{icon}</i>
    </div>
  );
}

export default IconSwitch;
