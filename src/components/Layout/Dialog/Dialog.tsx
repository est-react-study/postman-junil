import React from "react";



export const Dialog: React.FC = (props) => {
  return (
    <div>
      <div>
        { props.children }
      </div>
    </div>
  );
}