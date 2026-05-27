import { artContact } from "@/data/artworks";

const ContactSection = () => (
  <section id="contact" className="content-wrap pb-20 sm:pb-24">
    <div className="grid gap-8 rounded-[8px] border bg-[hsl(var(--surface))] p-8 sm:grid-cols-[1fr_auto] sm:items-end sm:p-10">
      <div className="max-w-[38rem]">
        <p className="eyebrow">Welcome to my creative world</p>
        <h2 className="section-title">Request availability or start a conversation.</h2>
        <p className="muted m-0 mt-4 leading-8">
          I am always looking forward to new opportunities, collaborations and interesting projects.
          Contact me to work together.
        </p>
      </div>
      <div className="mobile-action-stack flex flex-wrap gap-3 sm:justify-end">
        <a href={`mailto:${artContact.email}`} className="pill-cta focus-ring">
          Request availability
        </a>
        <a href={artContact.instagramUrl} className="pill-ghost focus-ring" target="_blank" rel="noreferrer">
          Instagram
        </a>
      </div>
      <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm sm:col-span-2">
        <a className="focus-ring text-foreground underline-offset-4 hover:underline" href={`mailto:${artContact.email}`}>
          {artContact.email}
        </a>
        <a className="focus-ring text-foreground underline-offset-4 hover:underline" href={artContact.instagramUrl} target="_blank" rel="noreferrer">
          instagram.com/melikhox
        </a>
      </div>
    </div>
  </section>
);

export default ContactSection;
