import React, { useState, useEffect } from 'react';
import { Table, Badge, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { TaskHeader } from './styles';
import api from '../../services/api';

interface ITask {
  id: number;
  title: string;
  description: string;
  finished: boolean;
  created_at: Date;
  updated_at: Date;
}

const Tasks: React.FC = () => {

  const [tasks, setTasks] = useState<ITask[]>([])
  const history = useHistory()

  useEffect(() => {
    loadTasks()
  }, [])

  const loadTasks = async () => {
    try {
      const res = await api.get("/tasks")
      setTasks(res.data)
    } catch (err) {
      alert("Não foi possível carregar os dados!")
    }
  }

  const formatDate = (date: Date) => {
    return moment(date).format("DD/MM/YYYY")
  }

  const goToCreateTask = async () => {
    history.push('/cadastro')
  }

  return (
    <div className="container">
      <br></br>
      <TaskHeader className="task-header">
        <h2>Tarefas</h2>
        <Button variant="dark" size="sm" onClick={goToCreateTask}>Nova Tarefa</Button>
      </TaskHeader>
      <br></br>
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th></th>
            <th>Título</th>
            <th>Data</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {
            tasks.map(task => {
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{formatDate(task.updated_at)}</td>
                <td>
                  <Badge variant={task.finished ? "success" : "warning"}>
                    {task.finished ? "FINALIZADO" : "PENDENTE"}
                  </Badge>
                </td>
                <td>
                  <Button size="sm">Editar</Button>{' '}
                  <Button size="sm" variant="success">Finalizar</Button>{' '}
                  <Button size="sm" variant="info">Visualizar</Button>{' '}
                  <Button size="sm" variant="danger">rEMOVER</Button>
                </td>
              </tr>
            })
          }
        </tbody>
      </Table>
    </div>
  )
}

export default Tasks;