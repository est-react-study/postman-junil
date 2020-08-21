import React from "react";
import {RequestContainer} from "./RequestContainer";
import {ResponseContainer} from "./ResponseContainer";

export const FormContainer: React.FC = () => {

  return (
    <section className="formContainer">
      <RequestContainer />
      <ResponseContainer />
    </section>
  )
};