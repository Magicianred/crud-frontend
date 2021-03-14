import React, { ChangeEvent, useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import api from '../../services/api';
import { TaskHeader } from './styles';

interface ITask {
  title: string;
  description: string;
}

const TaskForm: React.FC = () => {
  const history = useHistory()
  const { id } = useParams()

  const [model, setModel] = useState<ITask>({
    title: '',
    description: ''
  })

  useEffect(() => {
    if (id !== undefined) {
      findTask(id)
    }
  }, [id]) 

  const updatedModel = (e: ChangeEvent<HTMLInputElement>) => {
    setModel({
      ...model,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = async (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      if (id !== undefined) {
        const res = await api.put(`/tasks/${id}`, model)
        setModel(res.data)
      } else {
        const res = await api.post(`/tasks`, model)
        setModel(res.data)
      }
      goBack()
    } catch (err) {
      alert ("Ops, ocorreu um erro!")
    }
  }

  const findTask = async (id: string) => {
    const res = await api.get(`/tasks/${id}`) 
    setModel({
      title: res.data.title,
      description: res.data.description
    })
  }

  const goBack = async () => {
    history.goBack()
  }

  return (
    <div className="container">
      <br />
      <TaskHeader className="task-header">
        <h2>Criar tarefa</h2>
        <Button variant="dark" size="sm" onClick={goBack}>Voltar</Button>
      </TaskHeader>
      <br />
      <div className="container">
        <Form onSubmit={onSubmit}>
          <Form.Group>
            <Form.Label>Título</Form.Label>
            <Form.Control 
              type="text" 
              name="title" 
              value={model.title}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Descrição</Form.Label>
            <Form.Control 
              as="textarea" 
              rows={3} 
              value={model.description}
              name="description"
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} 
            />
          </Form.Group>
          <Button variant="dark" type="submit">Criar</Button>
        </Form>
      </div>
    </div>
  )
}

export default TaskForm;