import type { Artwork } from "@/data/artworks";
import ArtworkCard from "./ArtworkCard";

interface ArtworkGridProps {
  artworks: Artwork[];
}

const ArtworkGrid = ({ artworks }: ArtworkGridProps) => (
  <div className="grid gap-14">
    {(["landscape", "portrait", "square"] as const).map((orientation) => {
      const groupedArtworks = artworks.filter((artwork) => artwork.orientation === orientation);

      if (groupedArtworks.length === 0) return null;

      return (
        <div
          key={orientation}
          className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {groupedArtworks.map((artwork) => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
      );
    })}
  </div>
);

export default ArtworkGrid;
