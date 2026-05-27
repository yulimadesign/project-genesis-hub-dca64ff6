import type { Artwork } from "@/data/artworks";
import ArtworkCard from "./ArtworkCard";

interface ArtworkGridProps {
  artworks: Artwork[];
}

const ArtworkGrid = ({ artworks }: ArtworkGridProps) => (
  <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
    {artworks.map((artwork) => (
      <ArtworkCard key={artwork.id} artwork={artwork} />
    ))}
  </div>
);

export default ArtworkGrid;
