import { useEffect } from "react";

const invitation = {
  names: {
    groom: "КИРИЛЛ",
    bride: "АЛИНА",
  },
  date: "10.10.2026",
  day: "10 октября",
  venue: "Ресторан \"Гости\"",
  address: "Лабинск, Владимирская ул., 177",
  email: "tararsovaa693gmail@yandex.ru",
  schedule: [
    { time: "12:30", label: "Сбор гостей" },
    { time: "13:00", label: "Церемония регистрации" },
    { time: "16:30", label: "Праздничный ужин" },
    { time: "23:00", label: "Завершение вечера" },
  ],
};

const HeroTitle = () => (
  <div className="wedding-title" aria-label="Кирилл and Алина, 10.10.2026">
    <p>{invitation.names.groom}</p>
    <span>and</span>
    <p>{invitation.names.bride}</p>
    <time dateTime="2026-10-10">{invitation.date}</time>
  </div>
);

const KirillAndAlina = () => {
  useEffect(() => {
    document.title = "Кирилл и Алина | Приглашение на свадьбу";
    const desc =
      "Свадебное приглашение Кирилла и Алины на 10 октября 2026 года в ресторане Гости, Лабинск.";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", desc);
        const styleId = "kirill-and-alina-nicoletta-font";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        @font-face {
          font-family: "Nicoletta Script SHA";
          src: url("/Nicoletta%20Script%20SHA_1.otf") format("opentype");
          font-weight: normal;
          font-style: normal;
          font-display: swap;
        }

        .wedding-title > p {
          font-family: "Nicoletta Script SHA", cursive !important;
          font-weight: normal !important;
          text-transform: none !important;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <main className="wedding-page">
      <section className="wedding-cover wedding-cover--hero">
        <HeroTitle />
        <a className="wedding-scroll" href="#invitation" aria-label="Перейти к приглашению">
          ↓
        </a>
      </section>

      <section className="wedding-intro" id="invitation">
        <p>
          Мы будем очень рады видеть вас рядом в этот особенный для нас день.
          Наша свадьба состоится
        </p>
        <strong>{invitation.day}</strong>
      </section>

      <section className="wedding-schedule" aria-labelledby="wedding-schedule-title">
        <div className="wedding-schedule__card">
          <p className="wedding-kicker" id="wedding-schedule-title">
            Приглашение
          </p>
          <h1>{invitation.day}</h1>
          <ol>
            {invitation.schedule.map((item) => (
              <li key={item.time}>
                <time>{item.time}</time>
                <span>{item.label}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="wedding-place" aria-labelledby="wedding-place-title">
        <p className="wedding-kicker" id="wedding-place-title">
          Место
        </p>
        <h2>{invitation.venue}</h2>
        <img
          src="https://optim.tildacdn.ink/tild3166-3336-4236-b237-613438333830/-/resize/700x/-/format/webp/XXXL.webp"
          alt="Ресторан Гости в Лабинске"
          loading="lazy"
        />
        <address>{invitation.address}</address>
      </section>

      <section className="wedding-flowers" aria-labelledby="wedding-flowers-title">
        <h2 id="wedding-flowers-title">Цветы</h2>
        <p>
          Невеста очень любит цветы, но не сможет в полной мере насладиться ими в
          этот день. Вместо букетов мы будем рады бутылочке вина с теплыми
          пожеланиями!
        </p>
        <div className="wedding-flowers__photo" role="img" aria-label="Бокалы вина" />
      </section>

      <section className="wedding-rsvp" aria-labelledby="wedding-rsvp-title">
        <h2 id="wedding-rsvp-title">
          Очень ждем и будем рады видеть вас на нашей свадьбе!
        </h2>
        <p>Подтвердите, если сможете прийти</p>

        <form
          action={`https://formsubmit.co/${invitation.email}`}
          method="POST"
          className="wedding-form"
        >
          <input type="hidden" name="_subject" value="Заявка с приглашения Кирилла и Алины" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="text" name="_honey" className="wedding-form__honeypot" tabIndex={-1} />

          <label>
            <span>Ваше имя</span>
            <input name="Имя" type="text" required autoComplete="name" />
          </label>

          <fieldset>
            <legend>Сможете прийти?</legend>
            <label className="wedding-option">
              <input type="radio" name="Ответ" value="С удовольствием приду" required />
              <span>С удовольствием приду</span>
            </label>
            <label className="wedding-option">
              <input type="radio" name="Ответ" value="К сожалению, не смогу" required />
              <span>К сожалению, не смогу</span>
            </label>
          </fieldset>

          <button type="submit">Отправить</button>
        </form>
      </section>
    </main>
  );
};

export default KirillAndAlina;
