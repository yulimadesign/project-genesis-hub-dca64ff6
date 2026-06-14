import { useState } from "react";
import { X } from "lucide-react";
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

  return (
    <>
      <div className="grid gap-14">
        {(["landscape", "portrait", "square"] as const).map((orientation) => {
          const groupedArtworks = artworks.filter(
            (artwork) => artwork.orientation === orientation,
          );

          if (groupedArtworks.length === 0) return null;

          return (
            <div
              key={orientation}
              className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
            >
              {groupedArtworks.map((artwork) => (
                <ArtworkCard
                  key={artwork.id}
                  artwork={artwork}
                  onOpen={setSelectedArtwork}
                />
              ))}
            </div>
          );
        })}
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
            <div className="grid h-full grid-rows-[1fr_auto]">
              <div className="min-h-0 px-4 py-16 sm:px-8">
                <img
                  src={selectedArtwork.image}
                  alt={selectedArtwork.alt}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="flex items-center justify-between gap-4 border-t border-white/15 bg-black/70 px-4 py-4 sm:px-8">
                <div>
                  <p className="m-0 text-base font-medium">{selectedArtwork.title}</p>
                  {selectedArtwork.price && (
                    <p className="m-0 mt-1 text-sm text-white/70">${selectedArtwork.price}</p>
                  )}
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </>
  );
};

export default ArtworkGrid;
