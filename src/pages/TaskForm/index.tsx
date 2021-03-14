import React from 'react';
import { Button, Form } from 'react-bootstrap';
import api from '../../services/api';
import { TaskHeader } from './styles';

interface ITask {
  id: number;
  title: string;
  description: string;
  finished: boolean;
  created_at: Date;
  updated_at: Date;
}

const TaskForm: React.FC = () => {
  return (
    <div className="container">
      <br />
      <TaskHeader className="task-header">
        <h2>Criar tarefa</h2>
        <Button variant="dark" size="sm">Voltar</Button>
      </TaskHeader>
      <br />
      <div className="container">
        <Form>
          <Form.Group>
            <Form.Label>Título</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Descrição</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
          <Button variant="dark" type="submit">Criar</Button>
        </Form>
      </div>
    </div>
  )
}

export default TaskForm;