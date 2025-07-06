export interface GridItem {
  id: number;
  title: string;
  description: string;
  href: string;
  imgSrc: string;
  className?: string;
  gradient: string;
}

export interface NewsCardData {
  id: number;
  category: string;
  date: string;
  title: string;
  description: string;
  imageSrc: string;
  link: string;
}

export interface DocumentCardData {
  id: number;
  category: string;
  title: string;
  imageSrc: string;
  link: string;
}

export interface CompetitionData {
  id: number;
  year: number;
  imageSrc: string;
  position: 1 | 2 | 3 | 4; // Rank, used for styling the tag
  positionText: string; // e.g., "#1 Place", "Runner Up"
  title: string;
  university: string;
  participants: string[];
  style?: "red" | "blue" | "combination"; // Controls the card's theme
  className?: string;
}
