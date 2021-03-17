import React, { useState, useEffect } from 'react';
import { Table, Badge, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { formatDate } from '../../utils';
import { ITask } from '../../model';
import api from '../../services/api';
import { goToCreateTask } from '../../router/Coordinator';
import { TaskHeader } from './styles';

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

  const finishedTask = async (id: number) => {
    await api.patch(`tasks/${id}`)
    loadTasks()
  }

  const deleteTask = async (id: number) => {
    await api.delete(`tasks/${id}`)
    loadTasks()
  }
 
  const editTask = async (id: number) => {
    history.push(`/cadastro/${id}`)
  }  

  const viewTask = async (id: number) => {
    history.push(`/detalhes/${id}`)
  }

  return (
    <div className="container">
      <br></br>
      <TaskHeader className="task-header">
        <h2>Tarefas</h2>
        <Button variant="dark" size="sm" onClick={() => goToCreateTask(history)}>Nova Tarefa</Button>
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
                  <Button size="sm" disabled={task.finished} onClick={() => editTask(task.id)}>Editar</Button>{' '}
                  <Button size="sm" disabled={task.finished} variant="success" onClick={() => finishedTask(task.id)}>Finalizar</Button>{' '}
                  <Button size="sm" variant="info" onClick={() => viewTask(task.id)}>Visualizar</Button>{' '}
                  <Button size="sm" variant="danger" onClick={() => deleteTask(task.id)}>Remover</Button>
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