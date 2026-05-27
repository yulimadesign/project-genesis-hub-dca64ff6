import { artworkCategories, type ArtworkCategory } from "@/data/artworks";

interface FilterTabsProps {
  activeCategory: ArtworkCategory;
  onChange: (category: ArtworkCategory) => void;
}

const FilterTabs = ({ activeCategory, onChange }: FilterTabsProps) => (
  <div aria-label="Filter artworks by category" className="flex flex-wrap gap-2" role="tablist">
    {artworkCategories.map((category) => {
      const isActive = category === activeCategory;

      return (
        <button
          key={category}
          type="button"
          role="tab"
          aria-selected={isActive}
          className="focus-ring min-h-11 rounded-full border px-4 py-2 text-sm font-medium transition-colors"
          style={{
            background: isActive ? "hsl(var(--foreground))" : "hsl(var(--surface))",
            borderColor: isActive ? "hsl(var(--foreground))" : "hsl(var(--border))",
            color: isActive ? "hsl(var(--background))" : "hsl(var(--foreground))",
          }}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      );
    })}
  </div>
);

export default FilterTabs;
