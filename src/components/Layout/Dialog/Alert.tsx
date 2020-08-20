import React from "react";
import { Dialog } from "./Dialog";

export const Alert: React.FC = (props) => {
  return (
    <Dialog>
      { props.children }
    </Dialog>
  );
}