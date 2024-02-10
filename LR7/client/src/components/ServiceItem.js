import React from 'react';
import { ListGroup } from 'react-bootstrap';

const ServiceItem = ({ name }) => {
  return <ListGroup.Item>{name}</ListGroup.Item>;
};

export default ServiceItem;
