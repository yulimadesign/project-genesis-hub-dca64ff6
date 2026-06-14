import { useEffect, useMemo, useState } from "react";
import AboutSection from "@/components/art/AboutSection";
import ArtworkGrid from "@/components/art/ArtworkGrid";
import ContactSection from "@/components/art/ContactSection";
import FilterTabs from "@/components/art/FilterTabs";
import Header from "@/components/art/Header";
import Hero from "@/components/art/Hero";
import { artworks, type ArtworkCategory } from "@/data/artworks";

const ArtistPortfolio = () => {
  const [activeCategory, setActiveCategory] = useState<ArtworkCategory>("All");

  const visibleArtworks = useMemo(
    () =>
      activeCategory === "All"
        ? artworks
        : artworks.filter((artwork) => artwork.category === activeCategory),
    [activeCategory],
  );

  useEffect(() => {
    document.title = "Artist Portfolio | Yulia McCoy";
    const desc =
      "A quiet, editorial artist portfolio and inquiry page for paintings, drawings, oil pastel, watercolor, graphics, and oil works by Yulia McCoy.";
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", desc);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <section
          id="available-works"
          className="page-wrap scroll-mt-24 pb-12 sm:pb-16"
          aria-labelledby="available-works-title"
        >
          <div className="mb-9 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-[38rem]">
              <p className="eyebrow">Available Works</p>
              <h2 id="available-works-title" className="section-title">
                Available works
              </h2>
            </div>
            <FilterTabs activeCategory={activeCategory} onChange={setActiveCategory} />
          </div>
          <ArtworkGrid artworks={visibleArtworks} />
        </section>
        <AboutSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default ArtistPortfolio;
