import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCategoryList } from '../redux/slices/services/operations';
import Like from 'icons/like.png';
import Reaction from 'icons/reaction.png';
import Comment from 'icons/comments.png';
import Audience from 'icons/audience.png';
import Review from 'icons/reviews.png';
import css from './ServiceList.module.scss';

const serviceList = [
  {
    name: 'Подписчики',
    link: '/subcribers',
    icon: Audience,
  },
  {
    name: 'Лайки',
    link: '/likes',
    icon: Like,
  },
  {
    name: 'Комментарии',
    link: '/comments',
    icon: Comment,
  },
  {
    name: 'Просмотры',
    link: '/reviews',
    icon: Review,
  },
  {
    name: 'Реакции',
    link: '/reactions',
    icon: Reaction,
  },
];

const ServiceList = () => {
  const { service } = useParams();

  const dispatch = useDispatch();

  const { lang } = useSelector(state => state.auth);
  // const { serviceList } = useSelector(state => state.services);

  useEffect(() => {
    if (service) dispatch(getCategoryList({ service }));
  }, [service, dispatch]);

  return (
    <ul className={css.list}>
      {serviceList?.map((item, index) => (
        <li key={index} className={css.item}>
          <NavLink to={`/${service}${item.link}`} className={css.link}>
            <span className={css.title}>{item.name}</span>
            <img src={item.icon} alt={item.name} />
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default ServiceList;
