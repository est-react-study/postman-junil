import React, {useState} from "react";
import {RequestContainer} from "./RequestContainer";
import {Alert} from "components/Layout/Dialog/Alert";

export const FormContainer: React.FC = () => {

  const [isAlert, setAlert] = useState(true);

  return (
    <section className="formContainer">
      <RequestContainer />
      { isAlert &&
        <Alert onClose={() => setAlert(false)}>
          test
        </Alert>
      }
    </section>
  )
};