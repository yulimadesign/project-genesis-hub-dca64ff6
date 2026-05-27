export const artworkCategories = [
  "All",
  "Oil Pastel",
  "Watercolor",
  "Graphics",
  "Oil",
] as const;

export type ArtworkCategory = (typeof artworkCategories)[number];

export interface Artwork {
  id: string;
  title: string;
  orientation: "landscape" | "portrait" | "square";
  category?: Exclude<ArtworkCategory, "All">;
  medium?: string;
  year?: string;
  size?: string;
  price?: number;
  status?: "sold";
  image: string;
  alt: string;
}

export const artworks: Artwork[] = [
  {
    id: "visitor",
    title: "Visitor",
    orientation: "landscape",
    category: "Oil Pastel",
    medium: "Oil pastel, toned paper",
    year: "2026",
    size: "23.5x19.5",
    price: 445,
    image: "/images/art/works/visitor.jpeg",
    alt: "Visitor by Yulia McCoy, oil pastel on toned paper",
  },
  {
    id: "stack-of-corn",
    title: "Stack of corn",
    orientation: "landscape",
    category: "Oil Pastel",
    medium: "Oil pastel, toned paper",
    year: "2026",
    size: "21x17",
    price: 390,
    image: "/images/art/works/stack-of-corn.jpeg",
    alt: "Stack of corn by Yulia McCoy, oil pastel on toned paper",
  },
  {
    id: "pheasant",
    title: "Pheasant",
    orientation: "landscape",
    category: "Oil Pastel",
    medium: "Oil pastel, canvas on board",
    year: "2026",
    size: "22x18",
    price: 425,
    image: "/images/art/works/pheasant.jpeg",
    alt: "Pheasant by Yulia McCoy, oil pastel on canvas on board",
  },
  {
    id: "new-years-eve-morning",
    title: "New Year's Eve morning",
    orientation: "landscape",
    category: "Oil Pastel",
    medium: "Oil pastel, toned paper",
    year: "2026",
    size: "16x13",
    price: 390,
    image: "/images/art/works/new-years-eve-morning.jpeg",
    alt: "New Year's Eve morning by Yulia McCoy, oil pastel on toned paper",
  },
  {
    id: "first-snow",
    title: "First snow",
    orientation: "landscape",
    category: "Oil Pastel",
    medium: "Oil pastel, toned paper",
    year: "2026",
    size: "16x13",
    price: 380,
    image: "/images/art/works/first-snow.jpeg",
    alt: "First snow by Yulia McCoy, oil pastel on toned paper",
  },
  {
    id: "new-years-day-evening",
    title: "New Year's day, evening",
    orientation: "portrait",
    category: "Oil Pastel",
    medium: "Oil pastel, canvas on board",
    year: "2026",
    size: "16x13",
    price: 350,
    status: "sold",
    image: "/images/art/works/new-years-day-evening.jpeg",
    alt: "New Year's day, evening by Yulia McCoy, oil pastel on canvas on board",
  },
  {
    id: "bushivalka",
    title: "Bushivalka",
    orientation: "landscape",
    image: "/images/art/works/bushivalka.jpeg",
    alt: "Bushivalka by Yulia McCoy",
  },
  {
    id: "childhood-memories",
    title: "Childhood Memories",
    orientation: "portrait",
    image: "/images/art/works/childhood-memories.jpeg",
    alt: "Childhood Memories by Yulia McCoy",
  },
  {
    id: "fish",
    title: "Fish",
    orientation: "square",
    status: "sold",
    image: "/images/art/works/fish.jpeg",
    alt: "Fish by Yulia McCoy",
  },
  {
    id: "on-the-trail",
    title: "On the trail",
    orientation: "portrait",
    status: "sold",
    image: "/images/art/works/on-the-trail.jpeg",
    alt: "On the trail by Yulia McCoy",
  },
  {
    id: "summer-freedom",
    title: "Summer Freedom",
    orientation: "portrait",
    image: "/images/art/works/summer-freedom.jpeg",
    alt: "Summer Freedom by Yulia McCoy",
  },
  {
    id: "the-last-fog",
    title: "The Last Fog",
    orientation: "portrait",
    image: "/images/art/works/the-last-fog.jpeg",
    alt: "The Last Fog by Yulia McCoy",
  },
  {
    id: "whispers-of-the-forest",
    title: "Whispers of the Forest",
    orientation: "portrait",
    status: "sold",
    image: "/images/art/works/whispers-of-the-forest.jpeg",
    alt: "Whispers of the Forest by Yulia McCoy",
  },
  {
    id: "winter-in-the-forest",
    title: "Winter in the Forest",
    orientation: "landscape",
    image: "/images/art/works/winter-in-the-forest.jpeg",
    alt: "Winter in the Forest by Yulia McCoy",
  },
  {
    id: "untitled-study-1",
    title: "Untitled study 1",
    orientation: "portrait",
    image: "/images/art/works/untitled-study-1.jpeg",
    alt: "Untitled study 1 by Yulia McCoy",
  },
  {
    id: "untitled-study-3",
    title: "Untitled study 3",
    orientation: "portrait",
    image: "/images/art/works/untitled-study-3.jpeg",
    alt: "Untitled study 3 by Yulia McCoy",
  },
  {
    id: "untitled-study-4",
    title: "Untitled study 4",
    orientation: "portrait",
    image: "/images/art/works/untitled-study-4.jpeg",
    alt: "Untitled study 4 by Yulia McCoy",
  },
  {
    id: "untitled-study-5",
    title: "Untitled study 5",
    orientation: "portrait",
    image: "/images/art/works/untitled-study-5.jpeg",
    alt: "Untitled study 5 by Yulia McCoy",
  },
  {
    id: "untitled-study-6",
    title: "Untitled study 6",
    orientation: "portrait",
    image: "/images/art/works/untitled-study-6.jpeg",
    alt: "Untitled study 6 by Yulia McCoy",
  },
  {
    id: "untitled-study-7",
    title: "Untitled study 7",
    orientation: "landscape",
    image: "/images/art/works/untitled-study-7.jpeg",
    alt: "Untitled study 7 by Yulia McCoy",
  },
  {
    id: "untitled-study-8",
    title: "Untitled study 8",
    orientation: "landscape",
    image: "/images/art/works/untitled-study-8.jpeg",
    alt: "Untitled study 8 by Yulia McCoy",
  },
];

export const artContact = {
  email: "melikhovau77@gmail.com",
  instagramUrl: "https://www.instagram.com/melikhox/",
};
