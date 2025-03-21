import React, { useState, useEffect } from 'react';
import { ReactComponent as Like } from 'icons/like.svg';
import { ReactComponent as Comment } from 'icons/comment.svg';
import { ReactComponent as Reviews } from 'icons/review.svg';
import { ReactComponent as Subscribers } from 'icons/audience.svg';
import { ReactComponent as Reactions } from 'icons/reaction.svg';
import css from './DrumRoll.module.scss';

export const DrumRoll = () => {
  const list = [
    { word: 'Лайки', icon: <Like /> },
    { word: 'Просмотры', icon: <Reviews /> },
    { word: 'Комментарии', icon: <Comment /> },
    { word: 'Подписчики', icon: <Subscribers /> },
    { word: 'Реакции', icon: <Reactions /> },
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex(prevIndex => (prevIndex + 1) % list.length);
    }, 2000); // Интервал 2 секунды для плавности

    return () => clearInterval(interval);
  }, [list.length]);

  return (
    <div className={css.container}>
      {/* <span className={css.title}>Накрутка:</span> */}
      <div className={css.drum}>
        {list.map(({ icon, word }, index) => (
          <span
            key={index}
            className={`${css.word} ${
              index === currentWordIndex ? css.active : ''
            }`}
          >
            {icon}
            {word}
          </span>
        ))}
      </div>
    </div>
  );
};
