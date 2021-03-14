import React from 'react';
import { ErrorPage } from './styles';

const Error: React.FC = () => {
  return (
    <ErrorPage>
      <h1>Ops, ocorreu um erro!</h1>
      <h2>Verifique a URL da página</h2>
    </ErrorPage>
  )
}

export default Error;