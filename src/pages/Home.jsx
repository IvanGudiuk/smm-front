import { useSelector } from 'react-redux';
import css from './Home.module.scss';

const content = {
  ru: {
    title:
      '📢 Продвижение в соцсетях: лайки, просмотры, реакции, комментарии, подписчики!',
    titleTwo: '🔥 Почему лайки, реакции и комментарии так важны?',
    titleThree: '🚀 Почему выбирают нас?',
    textOne:
      'Хотите, чтобы ваш профиль в соцсетях выглядел популярным и привлекал внимание? Мы поможем вам увеличить:',
    textTwo:
      'Наш сервис предлагает быстрое и безопасное продвижение в Instagram, YouTube, TikTok, Facebook, Telegram, Viber, Google maps, TripAdviser.',
    textThree:
      'Социальные сети работают по алгоритмам: чем больше у вас активности, тем чаще и выше ваш контент показывается другим пользователям. Лайки, комментарии и подписчики помогают:',
    pointOne:
      '✅ Привлекать новую аудиторию – алгоритмы соцсетей продвигают популярные посты.',
    pointTwo:
      '✅ Создавать доверие – пользователи охотнее подписываются на популярные аккаунты.',
    pointThree:
      '✅ Увеличивать продажи – чем больше вовлеченность, тем выше вероятность покупок.',
    pointFour:
      '✅ Выводить контент в рекомендации – повышенная активность увеличивает охват публикаций.',
    advantageOne: '✅ Реальные пользователи',
    advantageTwo: '✅ Быстрая накрутка без риска блокировки',
    advantageThree: '✅ Гибкие тарифы под любые цели',
    advantageFour: '✅ Полная анонимность',
  },
  uk: {
    title:
      '📢 Просування в соцмережах: лайки, перегляди, реакції, коментарі, підписники!',
    titleTwo: '🔥 Чому лайки, реакції та коментарі такі важливі?',
    titleThree: '🚀 Чому обирають нас?',
    textOne:
      'Хочете, щоб ваш профіль у соцмережах виглядав популярним і привертав увагу? Ми допоможемо вам збільшити:',
    textTwo:
      'Наш сервіс пропонує швидке та безпечне просування в Instagram, YouTube, TikTok, Facebook, Telegram, Viber, Google Maps, TripAdvisor.',
    textThree:
      'Соціальні мережі працюють за алгоритмами: чим більше у вас активності, тим частіше і вище ваш контент показується іншим користувачам. Лайки, коментарі та підписники допомагають:',
    pointOne:
      '✅ Залучати нову аудиторію – алгоритми соцмереж просувають популярні пости.',
    pointTwo:
      '✅ Створювати довіру – користувачі охочіше підписуються на популярні акаунти.',
    pointThree:
      '✅ Збільшувати продажі – чим більше залученість, тим вища ймовірність покупок.',
    pointFour:
      '✅ Виводити контент у рекомендації – підвищена активність збільшує охоплення публікацій.',
    advantageOne: '✅ Реальні користувачі',
    advantageTwo: '✅ Швидке просування без ризику блокування',
    advantageThree: '✅ Гнучкі тарифи під будь-які цілі',
    advantageFour: '✅ Повна анонімність',
  },
  en: {
    title:
      '📢 Social Media Promotion: Likes, Views, Reactions, Comments, Followers!',
    titleTwo: '🔥 Why are likes, reactions, and comments so important?',
    titleThree: '🚀 Why choose us?',
    textOne:
      'Do you want your social media profile to look popular and attract attention? We will help you increase:',
    textTwo:
      'Our service offers fast and safe promotion on Instagram, YouTube, TikTok, Facebook, Telegram, Viber, Google Maps, TripAdvisor.',
    textThree:
      'Social media platforms work based on algorithms: the more engagement you have, the more often and higher your content is shown to other users. Likes, comments, and followers help:',
    pointOne:
      '✅ Attract a new audience – social media algorithms promote popular posts.',
    pointTwo:
      '✅ Build trust – users are more likely to follow popular accounts.',
    pointThree:
      '✅ Increase sales – higher engagement leads to a greater chance of purchases.',
    pointFour:
      '✅ Get featured in recommendations – increased activity boosts content reach.',
    advantageOne: '✅ Real users',
    advantageTwo: '✅ Fast promotion with no risk of being blocked',
    advantageThree: '✅ Flexible pricing plans for any goals',
    advantageFour: '✅ Complete anonymity',
  },
  es: {
    title:
      '📢 Promoción en redes sociales: Me gusta, Vistas, Reacciones, Comentarios, Seguidores!',
    titleTwo:
      '🔥 ¿Por qué son tan importantes los me gusta, reacciones y comentarios?',
    titleThree: '🚀 ¿Por qué elegirnos?',
    textOne:
      '¿Quieres que tu perfil en redes sociales luzca popular y atraiga atención? Te ayudamos a aumentar:',
    textTwo:
      'Nuestro servicio ofrece promoción rápida y segura en Instagram, YouTube, TikTok, Facebook, Telegram, Viber, Google Maps, TripAdvisor.',
    textThree:
      'Las redes sociales funcionan con algoritmos: cuanto más engagement tengas, más a menudo y en una mejor posición se mostrará tu contenido a otros usuarios. Los me gusta, comentarios y seguidores ayudan a:',
    pointOne:
      '✅ Atraer nueva audiencia – los algoritmos de redes sociales promocionan las publicaciones populares.',
    pointTwo:
      '✅ Generar confianza – los usuarios tienen más probabilidades de seguir cuentas populares.',
    pointThree:
      '✅ Aumentar las ventas – mayor interacción significa mayor posibilidad de compras.',
    pointFour:
      '✅ Aparecer en recomendaciones – una mayor actividad aumenta el alcance del contenido.',
    advantageOne: '✅ Usuarios reales',
    advantageTwo: '✅ Promoción rápida sin riesgo de bloqueo',
    advantageThree: '✅ Planes de precios flexibles para cualquier objetivo',
    advantageFour: '✅ Total anonimato',
  },
  tr: {
    title:
      '📢 Sosyal Medya Tanıtımı: Beğeniler, Görüntülemeler, Tepkiler, Yorumlar, Takipçiler!',
    titleTwo: '🔥 Beğeniler, tepkiler ve yorumlar neden bu kadar önemli?',
    titleThree: '🚀 Neden bizi seçmelisiniz?',
    textOne:
      'Sosyal medya profilinizin popüler görünmesini ve dikkat çekmesini mi istiyorsunuz? Sizi büyütmemize izin verin:',
    textTwo:
      'Hizmetimiz, Instagram, YouTube, TikTok, Facebook, Telegram, Viber, Google Maps, TripAdvisor platformlarında hızlı ve güvenli bir tanıtım sunar.',
    textThree:
      'Sosyal medya platformları algoritmalarla çalışır: Ne kadar fazla etkileşim alırsanız, içeriğiniz o kadar sık ve üst sıralarda gösterilir. Beğeniler, yorumlar ve takipçiler şu konularda yardımcı olur:',
    pointOne:
      '✅ Yeni bir kitle çekmek – sosyal medya algoritmaları popüler gönderileri öne çıkarır.',
    pointTwo:
      '✅ Güven oluşturmak – kullanıcılar popüler hesapları takip etmeye daha yatkındır.',
    pointThree:
      '✅ Satışları artırmak – daha fazla etkileşim, daha yüksek satın alma olasılığı demektir.',
    pointFour:
      '✅ İçeriğinizi önerilere taşımak – yüksek etkileşim, gönderilerin erişimini artırır.',
    advantageOne: '✅ Gerçek kullanıcılar',
    advantageTwo: '✅ Engellenme riski olmadan hızlı tanıtım',
    advantageThree: '✅ Her hedefe uygun esnek fiyatlandırma',
    advantageFour: '✅ Tam gizlilik',
  },
};

const Home = () => {
  const { lang } = useSelector(state => state.auth);

  return (
    <div>
      <h2 className={css.title}>{content[lang].title}</h2>
      <p className={css.text}>{content[lang].textOne}</p>
      <p className={css.text}>{content[lang].textTwo}</p>
      <h3 className={css.title}>{content[lang].titleTwo}</h3>
      <p className={css.text}>{content[lang].textThree}</p>
      <p className={css.text}>{content[lang].pointOne}</p>
      <p className={css.text}>{content[lang].pointTwo}</p>
      <p className={css.text}>{content[lang].pointThree}</p>
      <p className={css.text}>{content[lang].pointFour}</p>
      <h3 className={css.title}>{content[lang].titleThree}</h3>
      <p className={css.text}>{content[lang].advantageOne}</p>
      <p className={css.text}>{content[lang].advantageTwo}</p>
      <p className={css.text}>{content[lang].advantageThree}</p>
      <p className={css.text}>{content[lang].advantageFour}</p>
    </div>
  );
};

export default Home;
