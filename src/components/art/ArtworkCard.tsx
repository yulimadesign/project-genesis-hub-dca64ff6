import { artContact, type Artwork } from "@/data/artworks";

interface ArtworkCardProps {
  artwork: Artwork;
  onOpen: (artwork: Artwork) => void;
}

const ArtworkCard = ({ artwork, onOpen }: ArtworkCardProps) => {
  const inquirySubject = encodeURIComponent(`Artwork inquiry: ${artwork.title}`);
  const inquiryBody = encodeURIComponent(
    `Hi Yulia,\n\nI would like to inquire about "${artwork.title}".\n\nThank you,`,
  );
  const isSold = artwork.status === "sold";
  const mediaAspectRatio =
    artwork.orientation === "landscape"
      ? "4 / 3"
      : artwork.orientation === "square"
        ? "1 / 1"
        : "3 / 4";
  const handleOpen = () => onOpen(artwork);

  return (
    <article
      className="focus-ring group grid cursor-zoom-in gap-4 rounded-[10px]"
      role="button"
      tabIndex={0}
      aria-label={`Open ${artwork.title} image`}
      onClick={handleOpen}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleOpen();
        }
      }}
    >
      <div
        className="relative overflow-hidden rounded-[8px] border bg-[hsl(var(--surface-subtle))]"
        style={{ aspectRatio: mediaAspectRatio }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 grid place-items-center px-6 text-center text-sm text-muted-foreground"
        >
          {artwork.title}
        </div>
        <img
          src={artwork.image}
          alt={artwork.alt}
          className={`relative h-full w-full transition duration-200 group-hover:scale-[1.01] ${
            artwork.imageFit === "contain" ? "object-contain" : "object-cover"
          }`}
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.opacity = "0";
          }}
        />
      </div>
      <div className="grid gap-3">
        <div className="flex items-start justify-between gap-4 max-[420px]:flex-col max-[420px]:gap-2">
          <div>
            <h3 className="m-0 text-xl font-medium leading-tight text-foreground">
              {artwork.title}
            </h3>
            {artwork.medium && <p className="muted m-0 mt-1 text-sm">{artwork.medium}</p>}
          </div>
          {isSold ? (
            <span className="shrink-0 rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-[0.06em] text-muted-foreground">
              Sold
            </span>
          ) : (
            artwork.price && (
              <p className="m-0 shrink-0 text-base font-medium">${artwork.price}</p>
            )
          )}
        </div>
        {(artwork.year || artwork.size) && (
          <dl className="m-0 grid grid-cols-2 gap-x-5 gap-y-1 text-sm max-[420px]:grid-cols-1">
            {artwork.year && (
              <div className="flex justify-between gap-3 border-t pt-2">
                <dt className="muted">Year</dt>
                <dd className="m-0">{artwork.year}</dd>
              </div>
            )}
            {artwork.size && (
              <div className="flex justify-between gap-3 border-t pt-2">
                <dt className="muted">Size</dt>
                <dd className="m-0">{artwork.size}</dd>
              </div>
            )}
          </dl>
        )}
        {isSold ? (
          <span className="inline-flex min-h-11 items-center justify-center rounded-full border px-4 py-2 text-sm font-medium text-muted-foreground">
            Sold
          </span>
        ) : (
          <a
            href={`mailto:${artContact.email}?subject=${inquirySubject}&body=${inquiryBody}`}
            className="focus-ring inline-flex min-h-11 items-center justify-center rounded-full border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-[hsl(var(--border-strong))] hover:bg-[hsl(var(--surface))]"
            onClick={(event) => event.stopPropagation()}
            onKeyDown={(event) => event.stopPropagation()}
          >
            Inquire
          </a>
        )}
      </div>
    </article>
  );
};

export default ArtworkCard;
