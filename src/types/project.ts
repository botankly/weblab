export type Category = 'frontend' | 'backend' | 'fullstack';
export type SortField = 'year' | 'title';
export type SortOrder = 'asc' | 'desc';

export interface Project {
  id: number;
  title: string;
  description: string;
  category: Category;
  tech: string[];
  year: number;
  featured?: boolean;
}
