import { ReactComponent as Icon } from "../icons/notFoundIcon.svg";
import css from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <Icon />
        <span className={css.text}>Страница не найдена</span>
      </div>
    </div>
  );
};

export default NotFound;
