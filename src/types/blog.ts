export interface Post {
  title: string;
  description: string;
  slug: string;
  date: string;
  author: string;
  tags: string[];
  category: string;
  cover: string;
  coverUrl: string;
  keywords: string;
  readMinutes: number;
  featured: boolean;
  content: string;
}