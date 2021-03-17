import React from 'react'
import { useHistory } from 'react-router-dom';
import { goToCreateTask } from '../../router/Coordinator';
import { HomePage } from './styles';

const Home: React.FC = () => {
  const history = useHistory()

  return (
    <HomePage>
      <h1>Bem-vindo(a) ao CreativeTask!</h1>
      <h2><u onClick={() => goToCreateTask(history)}>Clique aqui</u> para criar sua tarefa!</h2>
    </HomePage>
  )
}

export default Home;