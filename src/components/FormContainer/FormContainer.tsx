import React from "react";
import {RequestContainer} from "./RequestContainer";
import {Alert} from "components/Layout/Dialog/Alert";

export const FormContainer: React.FC = () => (
  <section className="formContainer">
    <RequestContainer />
    <Alert>
      test
    </Alert>
  </section>
);