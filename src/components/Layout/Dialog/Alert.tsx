import React from "react";

export const Alert: React.FC = (props) => {
  return (
    <div>
      <div>
        { props.children }
      </div>
    </div>
  );
}