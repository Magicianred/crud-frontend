import React, { useState, useEffect } from 'react';
import { Table, Badge, Button } from 'react-bootstrap';
import api from '../../services/api';
import moment from 'moment';

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

  useEffect(() => {
    loadTasks()
  }, [])

  const loadTasks = async () => {
    const res = await api.get("/tasks")
    setTasks(res.data)
  }

  const formatDate = (date: Date) => {
    return moment(date).format("DD/MM/YYYY")
  }

  return (
    <div className="container">
      <br></br>
      <h2>Tasks</h2>
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
              <tr key={ task.id }>
                <td>{ task.id }</td>
                <td>{ task.title }</td>
                <td>{ formatDate(task.updated_at) }</td>
                <td>
                  <Badge variant ={ task.finished ? "success" : "warning" }>
                    { task.finished ? "FINALIZADO" : "PENDENTE" }
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