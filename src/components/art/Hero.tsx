import { artContact } from "@/data/artworks";

const Hero = () => (
  <section className="page-wrap pb-16 pt-14 sm:pb-20 sm:pt-20">
    <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(18rem,0.72fr)]">
      <div className="max-w-[54rem]">
        <p className="eyebrow">Artist Portfolio</p>
        <h1 className="display m-0 max-w-[13ch] text-[2.7rem] leading-[1.08] sm:text-[4rem]">
          Paintings, drawings, and quiet observations of nature.
        </h1>
        <p className="muted m-0 mt-6 max-w-[39rem] text-lg leading-8">
          A selection of oil pastel, watercolor, graphics, and oil works by Yulia McCoy.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#available-works" className="pill-cta focus-ring">
            View available works
          </a>
          <a href={`mailto:${artContact.email}`} className="pill-ghost focus-ring">
            Contact
          </a>
        </div>
      </div>

      <div className="justify-self-stretch lg:justify-self-end">
        <img
          src="/images/art/yulia-gallery-hero.jpeg"
          alt="Yulia McCoy standing beside framed artworks in a gallery"
          className="h-auto w-full max-w-[34rem] rounded-[8px] object-contain shadow-sm lg:ml-auto"
          fetchPriority="high"
        />
      </div>
    </div>
  </section>
);

export default Hero;
