import React from "react";

const SkillIconsName = ({ title, position }) => {
  const getPositionStyle = () => {
    if (position) {
      return {
        ...styles.iconsName,
        top: position.top,
        left: position.left,
        display: "block",
      };
    }
    return styles.iconsName;
  };

  return (
    <div style={getPositionStyle()} className="iconsName">
      {title}
    </div>
  );
};

export default SkillIconsName;

const styles = {
  iconsName: {
    minWidth: 40,
    textAlign: "center",
    fontSize: 11,
    fontWeight: "bold",
    backgroundColore: "red",
    position: "absolute",
    zIndex: 1000,
    display: "none",
  },
};
