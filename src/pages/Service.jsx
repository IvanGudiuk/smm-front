import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import css from './Service.module.scss';

const Service = () => {
  const { service, category } = useParams();

  useEffect(() => {
    console.log(service, category);
  }, [service, category]);

  return <div>{service}</div>;
};

export default Service;
