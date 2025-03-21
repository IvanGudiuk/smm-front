import { useState, useEffect } from 'react';
import css from './LanguageSelect.module.scss';

export const LanguageSelect = ({ options, onSelect, authLang }) => {
  const [value, setValue] = useState(authLang || options[0].value);

  useEffect(() => {
    if (authLang) {
      setValue(authLang);
    }
  }, [authLang]);

  const clickHandler = value => {
    setValue(value);
    onSelect(value);
  };

  return (
    <div className={css.container}>
      <span className={css.select}>
        {options.map(item => {
          if (item.value === value) return item.icon;
        })}
        {value}
      </span>
      <ul className={css.list}>
        {options.map((item, index) => (
          <li key={index}>
            <button
              className={css.item}
              type="button"
              onClick={() => clickHandler(item.value)}
            >
              {item.icon}
              {item.value}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
