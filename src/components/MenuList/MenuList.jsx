import { NavLink } from 'react-router-dom';
import Like from 'icons/like.png';
import Reaction from 'icons/reaction.png';
import Comment from 'icons/comments.png';
import Audience from 'icons/audience.png';
import Review from 'icons/reviews.png';
import Telegram from 'icons/telegram.png';
import Viber from 'icons/viber.png';
import Instagram from 'icons/instagram.png';
import Youtube from 'icons/youtube.png';
import Tiktok from 'icons/tiktok.png';
import Facebook from 'icons/facebook.png';
import Google from 'icons/maps.png';
import TripAdvisor from 'icons/tripadvisor.png';
import Internet from 'icons/internet.png';
import css from './MenuList.module.scss';

const list = [
  {
    icon: Telegram,
    service: 'telegram',
    icons: [Like, Comment, Review, Audience, Reaction], // No JSX here
  },
  {
    icon: Viber,
    service: 'viber',
    icons: [Audience],
  },
  {
    icon: Instagram,
    service: 'instagram',
    icons: [Like, Comment, Review, Audience, Reaction],
  },
  {
    icon: Facebook,
    service: 'facebook',
    icons: [Like, Comment, Review, Audience, Reaction],
  },
  {
    icon: Youtube,
    service: 'youtube',
    icons: [Like, Comment, Review, Audience, Reaction],
  },
  {
    icon: Tiktok,
    service: 'tiktok',
    icons: [Like, Comment, Review, Audience, Reaction],
  },
  {
    icon: Google,
    service: 'google maps',
    icons: [Comment],
  },
  {
    icon: TripAdvisor,
    service: 'tripadvisor',
    icons: [Comment],
  },
  {
    icon: Internet,
    service: 'traffik',
    icons: [],
  },
];

export const MenuList = () => {
  return (
    <ul className={css.list}>
      {list.map(item => (
        <li className={css.item} key={item.service}>
          <NavLink
            to={`/${item.service}`}
            className={({ isActive }) =>
              isActive ? `${css.link} ${css.active}` : css.link
            }
          >
            <div className={css.iconWrapper}>
              <img src={item.icon} alt={item.service} />
              {item.service}
            </div>
            {/* <ul className={css.icons}>
              {item.icons.map((item, index) => (
                <li key={index} className={css.icon}>
                  <img src={item} alt={item} />
                </li>
              ))}
            </ul> */}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
