import React, { useState, useEffect } from 'react';
import { Button, Card, Badge } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import moment from 'moment';
import api from '../../services/api';

interface ITask {
  id: number;
  title: string;
  description: string;
  finished: boolean;
  created_at: date;
  updated_at: date;
}

const TaskDetails: React.FC = () => {
  const history = useHistory()
  const { id } = useParams()

  const [task, setTask] = useState<ITask>()

  useEffect(() => {
    findTask()
  }, [id])

  const goBack = () => {
    history.goBack()
  }

  const findTask = async () => {
    const res = await api.get<ITask>(`tasks/${id}`)
    setTask(res.data)
  }

  const formatDate = (date: Date | undefined) => {
    return moment(date).format("DD/MM/YYYY")
  }

  return (
    <div className="container">
      <br />
      <div className="task-header">
        <h2>Detalhes da tarefa</h2>
        <Button variant="dark" size="sm" onClick={goBack}>Voltar</Button>
      </div>
      <br />
      <Card>
        <Card.Body>
          <Card.Title>{task?.title}</Card.Title>
          <Card.Text>
            {task?.description}
            <br />
            <Badge variant={task?.finished ? "success" : "warning"}>
              {task?.finished ? "FINALIZADA" : "PENDENTE"}
            </Badge>
            <br />
            <strong>Data de cadastro: </strong>
            <Badge variant="info">
              {formatDate(task?.created_at)}
            </Badge>
            <br />
            <strong>Data de atualização: </strong>
            <Badge variant="info">
              {formatDate(task?.updated_at)}
            </Badge>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export default TaskDetails;