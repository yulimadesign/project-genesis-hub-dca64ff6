const AboutSection = () => (
  <section id="about-artist" className="content-wrap py-20 sm:py-24">
    <div className="grid gap-10 border-y py-12 sm:grid-cols-[0.85fr_1.15fr] sm:py-16">
      <div>
        <p className="eyebrow">About</p>
        <h2 className="section-title">Hi, I&apos;m Yulia</h2>
      </div>
      <div className="grid gap-5">
        <p className="muted m-0 leading-8">
          I&apos;m an artist who sees painting as a way to speak to the world through color and
          form. My work blends academic knowledge with emotional depth: I love observing nature,
          studying its anatomy, and transforming it into a living canvas.
        </p>
        <p className="muted m-0 leading-8">
          For me, it&apos;s not only about capturing the outer image, but also about expressing the
          inner movement of the soul&mdash;the energy that makes each piece unique.
        </p>
      </div>
    </div>
  </section>
);

export default AboutSection;
