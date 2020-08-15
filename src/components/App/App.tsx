import React from 'react';
import './App.scss';
import { AsideContainer } from '../AsideContainer';
import { FormContainer } from '../FormContainer';

export const App: React.FC = () => (
  <div className="App">
    <AsideContainer />
    <FormContainer />
  </div>
);
