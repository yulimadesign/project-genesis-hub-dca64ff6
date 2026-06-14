import { useCallback, useEffect, useMemo, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { Artwork } from "@/data/artworks";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import ArtworkCard from "./ArtworkCard";

interface ArtworkGridProps {
  artworks: Artwork[];
}

const ArtworkGrid = ({ artworks }: ArtworkGridProps) => (
  <ArtworkGridContent artworks={artworks} />
);

const ArtworkGridContent = ({ artworks }: ArtworkGridProps) => {
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const artworkSections = useMemo(() => {
    const bottomArtworks = artworks.filter((artwork) => artwork.placement === "bottom");
    const groupedArtworks = artworks.filter((artwork) => artwork.placement !== "bottom");

    return (["landscape", "portrait", "square"] as const)
      .map((orientation) =>
        groupedArtworks.filter((artwork) => artwork.orientation === orientation),
      )
      .filter((section) => section.length > 0)
      .concat(bottomArtworks.length > 0 ? [bottomArtworks] : []);
  }, [artworks]);
  const orderedArtworks = useMemo(() => artworkSections.flat(), [artworkSections]);
  const selectedIndex = selectedArtwork
    ? orderedArtworks.findIndex((artwork) => artwork.id === selectedArtwork.id)
    : -1;
  const showNavigation = orderedArtworks.length > 1 && selectedIndex >= 0;
  const openArtworkAt = useCallback(
    (index: number) => {
      const normalizedIndex = (index + orderedArtworks.length) % orderedArtworks.length;
      setSelectedArtwork(orderedArtworks[normalizedIndex]);
    },
    [orderedArtworks],
  );
  const openPreviousArtwork = useCallback(() => {
    openArtworkAt(selectedIndex - 1);
  }, [openArtworkAt, selectedIndex]);
  const openNextArtwork = useCallback(() => {
    openArtworkAt(selectedIndex + 1);
  }, [openArtworkAt, selectedIndex]);

  useEffect(() => {
    if (!selectedArtwork || !showNavigation) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        openPreviousArtwork();
      }

      if (event.key === "ArrowRight") {
        event.preventDefault();
        openNextArtwork();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [openNextArtwork, openPreviousArtwork, selectedArtwork, showNavigation]);

  return (
    <>
      <div className="grid gap-14">
        {artworkSections.map((section) => (
          <div
            key={section.map((artwork) => artwork.id).join("-")}
            className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
          >
            {section.map((artwork) => (
              <ArtworkCard
                key={artwork.id}
                artwork={artwork}
                onOpen={setSelectedArtwork}
              />
            ))}
          </div>
        ))}
      </div>
      <Dialog
        open={selectedArtwork !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedArtwork(null);
        }}
      >
        {selectedArtwork && (
          <DialogContent
            className="!left-0 !top-0 !h-dvh max-h-dvh !w-screen !max-w-none !translate-x-0 !translate-y-0 border-0 bg-black p-0 text-white shadow-none sm:rounded-none"
            showClose={false}
          >
            <DialogTitle className="sr-only">{selectedArtwork.title}</DialogTitle>
            <DialogDescription className="sr-only">
              Large image preview for {selectedArtwork.title}
            </DialogDescription>
            <DialogClose className="focus-ring absolute right-4 top-4 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/55 text-white backdrop-blur transition-colors hover:bg-white/10">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </DialogClose>
            {showNavigation && (
              <>
                <button
                  type="button"
                  className="focus-ring absolute left-4 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/55 text-white backdrop-blur transition-colors hover:bg-white/10 sm:left-6"
                  aria-label="Previous artwork"
                  onClick={openPreviousArtwork}
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  type="button"
                  className="focus-ring absolute right-4 top-1/2 z-10 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/25 bg-black/55 text-white backdrop-blur transition-colors hover:bg-white/10 sm:right-6"
                  aria-label="Next artwork"
                  onClick={openNextArtwork}
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
            <div className="grid h-full place-items-center p-4 sm:p-8">
              <img
                src={selectedArtwork.image}
                alt={selectedArtwork.alt}
                className="h-auto max-h-[calc(100dvh-2rem)] w-auto max-w-[calc(100vw-2rem)] object-contain sm:max-h-[calc(100dvh-4rem)] sm:max-w-[calc(100vw-4rem)]"
              />
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
};

export default ArtworkGrid;
