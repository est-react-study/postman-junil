import React from 'react';
import {AsideContainer} from "./AsideContainer";
import {ResponseContainer} from "./ResponseContainer";
import {RequestContainer} from "./RequestContainer";

export const AppContainer: React.FC = () => (
  <div className="App">
    <AsideContainer />
    <section className="formContainer">
      <RequestContainer />
      <ResponseContainer />
    </section>
  </div>
);
