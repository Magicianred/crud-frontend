import React from 'react';
import { Card, Badge } from 'react-bootstrap';
import { ITask } from '../../model'
import formatDate from '../../utils';

const CardDetails: React.FC<ITask> = ({ 
  title, 
  description, 
  finished, 
  created_at, 
  updated_at 
}) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
          <br />
          <Badge variant={finished ? "success" : "warning"}>
            {finished ? "FINALIZADA" : "PENDENTE"}
          </Badge>
          <br />
          <strong>Data de cadastro: </strong>
          <Badge variant="info">
            {formatDate(created_at)}
          </Badge>
          <br />
          <strong>Data de atualização: </strong>
          <Badge variant="info">
            {formatDate(updated_at)}
          </Badge>
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default CardDetails;