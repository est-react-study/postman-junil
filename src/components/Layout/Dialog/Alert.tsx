import React from "react";
import { Dialog } from "./Dialog";

export const Alert: React.FC = (props) => {
  return (
    <Dialog width={500}>
      { props.children }
    </Dialog>
  );
}