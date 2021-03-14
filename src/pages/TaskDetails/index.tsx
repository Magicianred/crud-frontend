import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';
import api from '../../services/api';
import { ITask } from '../../model'
import { goBack } from '../../router/Coordinator';
import CardDetails from '../../components/CardDetails/index';

const TaskDetails: React.FC = () => {
  const history = useHistory()
  const { id } = useParams()

  const [task, setTask] = useState<ITask>()

  useEffect(() => {
    findTask()
  }, [id])

  const findTask = async () => {
    const res = await api.get<ITask>(`tasks/${id}`)
    setTask(res.data)
  }

  return (
    <div className="container">
      <br />
      <div className="task-header">
        <h2>Detalhes da tarefa</h2>
        <Button variant="dark" size="sm" onClick={() => goBack(history)}>Voltar</Button>
      </div>
      <br />
      <CardDetails 
        title={task?.title}
        description={task?.description}
        finished={task?.finished}
        created_at={task?.created_at}
        updated_at={task?.updated_at}
      />
    </div>
  )
}

export default TaskDetails;