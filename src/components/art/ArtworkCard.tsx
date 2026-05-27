import { artContact, type Artwork } from "@/data/artworks";

interface ArtworkCardProps {
  artwork: Artwork;
}

const ArtworkCard = ({ artwork }: ArtworkCardProps) => {
  const inquirySubject = encodeURIComponent(`Artwork inquiry: ${artwork.title}`);
  const inquiryBody = encodeURIComponent(
    `Hi Yulia,\n\nI would like to inquire about "${artwork.title}".\n\nThank you,`,
  );
  const isSold = artwork.status === "sold";

  return (
    <article className="group grid gap-4">
      <div className="relative overflow-hidden rounded-[8px] border bg-[hsl(var(--surface-subtle))]">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid place-items-center px-6 text-center text-sm text-muted-foreground"
        >
          {artwork.title}
        </div>
        <img
          src={artwork.image}
          alt={artwork.alt}
          className="relative aspect-[4/5] w-full object-contain p-3 transition duration-200 group-hover:scale-[1.01]"
          loading="lazy"
          onError={(event) => {
            event.currentTarget.style.opacity = "0";
          }}
        />
      </div>
      <div className="grid gap-3">
        <div className="flex items-start justify-between gap-4">
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
          <dl className="m-0 grid grid-cols-2 gap-x-5 gap-y-1 text-sm">
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
          >
            Inquire
          </a>
        )}
      </div>
    </article>
  );
};

export default ArtworkCard;
